import LineGraph from "@/components/LineGraph";
import PieChart from "@/components/PieChart";
import { Search, Bell, Tags, Users2, ThumbsUp } from "lucide-react";
import Image from "next/image";
function DashBoardPage() {
  return (
    <div className="w-full max-h-screen my-2">
      {/* dashboard header */}
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center px-2 py-1 bg-white rounded-md shadow ring-2 ring-gray-200/10">
            <input className="outline-none" type="text" placeholder="Search" />
            <Search className="text-gray-300" />
          </div>
          <Bell className="cursor-pointer" />
          <div>
            <Image
              src="/user-image.jpg"
              width="30"
              height="30"
              className="cursor-pointer"
              alt="user avatar"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col">
        <div className="">
          <DashBoardBoxes />
        </div>
        <div className="">
          <LineGraph />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 ">
          <PieChart />
          <SchedulesBox />
        </div>
      </section>
    </div>
  );
}

const boxData = {
  revenues: 2129430,
  transactions: 1520,
  likes: 9721,
  users: 892,
};

function DashBoardBoxes() {
  const usaFormat = Intl.NumberFormat("en-us");

  return (
    <section className="grid grid-cols-2 mt-8 gap-x-20 gap-y-4 lg:grid-cols-4 lg:gap-x-12">
      <div className="flex flex-col px-6 py-3 shadow-md ring-1 ring-gray-300/10 bg-[#DDEFE0] rounded-xl">
        <span className="self-end">
          <Image src="/revenue.svg" width="25" height="25" alt="revenue icon" />
        </span>
        <h3 className="mt-2 text-sm">Total Revenues</h3>
        <b className="text-2xl lg:text-xl xl:text-2xl">
          ${usaFormat.format(boxData.revenues)}
        </b>
      </div>
      <div className="flex flex-col px-6 py-3 shadow-md ring-1 ring-gray-300/10 bg-[#F4ECDD] rounded-xl">
        <span className="self-end">
          <Tags />
        </span>
        <h3 className="mt-2 text-sm">Total Transactions</h3>
        <b className="text-2xl lg:text-xl xl:text-2xl">
          {usaFormat.format(boxData.transactions)}
        </b>
      </div>
      <div className="flex flex-col px-6 py-3 shadow-md ring-1 ring-gray-300/10 bg-[#EFDADA] rounded-xl">
        <span className="self-end">
          <ThumbsUp />
        </span>
        <h3 className="mt-2 text-sm">Total Likes</h3>
        <b className="text-2xl lg:text-xl xl:text-2xl">
          {usaFormat.format(boxData.likes)}
        </b>
      </div>
      <div className="flex flex-col px-6 py-3 shadow-md ring-1 ring-gray-300/10 bg-[#DEE0EF] rounded-xl">
        <span className="self-end">
          <Users2 />
        </span>
        <h3 className="mt-2 text-sm">Total Users</h3>
        <b className="text-2xl lg:text-xl xl:text-2xl">
          {usaFormat.format(boxData.users)}
        </b>
      </div>
    </section>
  );
}

function SchedulesBox() {
  return (
    <div className="p-4 mt-1 bg-white shadow-md rounded-xl ring-1 ring-gray-300/10">
      <h2 className="text-xl">Today&apos;s Schedules</h2>

      <div className="mt-3 space-y-2">
        <div className="pl-4 ml-1 border-l-4 border-green-300">
          <h2>Meeting wiht suppliers from Kuta Bali</h2>
          <p className="text-gray-500">14.00-15.00</p>
          <p className="text-gray-500">at Subset Road, Kuta, Bali</p>
        </div>
        <div className="pl-4 ml-1 border-l-4 border-violet-800">
          <h2>Check operation at Giga Factory 1</h2>
          <p className="text-gray-500">18.00-20.00</p>
          <p className="text-gray-500">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
