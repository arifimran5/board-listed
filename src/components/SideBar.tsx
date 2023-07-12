"use client";

import Link from "next/link";
import {
  PieChart,
  Tags,
  CalendarClock,
  UserCircle2,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/helper";
function SideBar() {
  const pathname = usePathname();

  function isActive(url: string) {
    return url === pathname;
  }

  return (
    <div className="flex flex-col h-[94vh] justify-between xl:min-w-[275px] px-10 xl:pl-[53px] xl:px-4 py-5 text-white bg-gray-950 rounded-2xl">
      <div>
        <h1 className="my-4 text-3xl font-black xl:text-4xl">Board.</h1>
        <nav className="flex flex-col gap-8 mt-16 text-lg xl:text-xl">
          <div className="inline-flex items-center gap-3">
            <PieChart className="w-5" />
            <Link
              className={cn(isActive("/app/dashboard") && "font-bold")}
              href="/app/dashboard"
            >
              Dashboard
            </Link>
          </div>
          <div className="inline-flex items-center gap-3">
            <Tags className="w-5" />
            <Link
              className={cn(isActive("/app/transactions") && "font-bold")}
              href="/app/transactions"
            >
              Transactions
            </Link>
          </div>
          <div className="inline-flex items-center gap-3">
            <CalendarClock className="w-5" />
            <Link
              className={cn(isActive("/app/schedules") && "font-bold")}
              href="/app/schedules"
            >
              Schedules
            </Link>
          </div>
          <div className="inline-flex items-center gap-3">
            <UserCircle2 className="w-5" />
            <Link
              className={cn(isActive("/users") && "font-bold")}
              href="/app/users"
            >
              Users
            </Link>
          </div>
          <div className="inline-flex items-center gap-3">
            <Settings className="w-5" />
            <Link
              className={cn(isActive("/settings") && "font-bold")}
              href="/app/settings"
            >
              Settings
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex flex-col">
        <span>Help</span>
        <span>Contact US</span>
      </div>
    </div>
  );
}

export default SideBar;
