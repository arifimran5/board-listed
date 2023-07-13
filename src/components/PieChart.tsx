"use client";
import { cn } from "@/utils/helper";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  PluginChartOptions,
  ElementChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = [
  {
    label: "Basic Tees",
    value: 55,
    color: "#98D89E",
  },
  {
    label: "Custom Short Pants",
    value: 31,
    color: "#F6DC7D",
  },
  {
    label: "Super Hoodies",
    value: 14,
    color: "#EE8484",
  },
];

const pieChart = {
  labels: pieData.map((d) => d.label),
  datasets: [
    {
      label: "Top products",
      data: pieData.map((d) => d.value),
      backgroundColor: pieData.map((d) => d.color),
    },
  ],
};

type chartoptionsType = _DeepPartialObject<
  CoreChartOptions<"pie"> &
    ElementChartOptions<"pie"> &
    PluginChartOptions<"pie"> &
    DatasetChartOptions<"pie"> &
    ScaleChartOptions<"pie"> &
    DoughnutControllerChartOptions
>;
const chartOptions: chartoptionsType = {
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
};

function PieChart() {
  return (
    <div className="p-4 mt-1 bg-white shadow-md rounded-xl ring-1 ring-gray-300/10">
      <h2 className="text-xl">Top products</h2>
      <div className="flex flex-col items-center gap-8 mt-3 lg:flex-row lg:items-start">
        <div className="h-40">
          <Pie data={pieChart} options={chartOptions} />
        </div>
        <div>
          {pieData.map((p) => (
            <div key={p.label}>
              <h3>
                <span
                  style={{ backgroundColor: p.color }}
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                ></span>
                {p.label}
              </h3>
              <p className="ml-5 text-sm text-gray-500">{p.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PieChart;
