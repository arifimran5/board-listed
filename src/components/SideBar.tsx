"use client";

import Link from "next/link";
import {
  PieChart,
  Tags,
  CalendarClock,
  UserCircle2,
  Settings,
  MenuIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/helper";
import { useEffect, useState } from "react";

export default function MobileSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className={`xl:hidden absolute top-0 left-0 right-0 z-50 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div className="flex px-3 py-3 bg-gray-950 text-gray-50">
          <button onClick={() => setIsOpen(true)} className="">
            <MenuIcon className="" />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "translate-x-0 overflow-y-hidden top-5 h-max"
            : "-translate-x-[120%] h-full"
        } xl:translate-x-0 absolute z-50 transition-all duration-300 ease-out`}
      >
        <SideBar handleClose={handleClose} />
      </div>

      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-gray-950/70 ${
          isOpen ? "translate-x-0" : "-translate-x-[120%]"
        } `}
      ></div>
    </div>
  );
}

function SideBar({ handleClose }: { handleClose: () => void }) {
  const pathname = usePathname();

  function isActive(url: string) {
    return url === pathname;
  }

  return (
    <>
      <div
        className={cn(
          "flex sticky top-4 flex-col xl:h-[94vh] gap-8 xl:gap-0 justify-between px-10 pl-[53px] min-w-[280px] py-5 text-white bg-gray-950 rounded-2xl"
        )}
      >
        <div>
          <h1 className="my-4 text-3xl font-black xl:text-4xl">Board.</h1>
          <nav
            onClick={handleClose}
            className="flex flex-col gap-6 mt-8 text-lg xl:gap-8 xl:mt-16 xl:text-xl"
          >
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
    </>
  );
}
