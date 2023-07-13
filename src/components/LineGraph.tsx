"use client";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
  ElementChartOptions,
  ScaleChartOptions,
  DatasetChartOptions,
  PluginChartOptions,
  LineControllerChartOptions,
} from "chart.js";
import { useEffect, useState } from "react";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type chartOptions = _DeepPartialObject<
  CoreChartOptions<"line"> &
    ElementChartOptions<"line"> &
    PluginChartOptions<"line"> &
    DatasetChartOptions<"line"> &
    ScaleChartOptions<"line"> &
    LineControllerChartOptions
>;

const options: chartOptions = {
  aspectRatio: 600 / 160,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: true,
      align: "end",
      labels: {
        boxWidth: 3,
        boxHeight: 3,
        useBorderRadius: true,
        borderRadius: 1,
      },
      maxHeight: 25,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 100,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

type ChartData = {
  week: number;
  Guest: number;
  User: number;
};
const LineGraph = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetch("/chartData.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>loading...</div>;
  }

  const labels = chartData.map((data) => `week ${data.week}`);
  const guestData = chartData.map((data) => data.Guest);
  const userData = chartData.map((data) => data.User);

  const chartConfig = {
    labels: labels,
    datasets: [
      {
        label: "Guest",
        data: guestData,
        fill: false,
        borderColor: "rgb(255,211,150)",
      },
      {
        label: "User",
        data: userData,
        fill: false,
        borderColor: "#8fff60",
      },
    ],
  };

  return (
    <div className="mt-8">
      <div className="p-6 bg-white shadow-md rounded-xl ring-1 ring-gray-300/10">
        <h2 className="text-xl">Activities</h2>
        <Line
          className="mt-3 lg:aspect-[600/140]"
          updateMode="resize"
          options={{ ...options }}
          data={chartConfig}
        />
      </div>
    </div>
  );
};

export default LineGraph;
