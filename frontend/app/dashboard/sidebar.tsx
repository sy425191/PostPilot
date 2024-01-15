"use client";

import { PlusIcon } from "@heroicons/react/20/solid";

import {
  ArrowDownIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="text-sm">
      <div className="sidebar h-full bg-gray-800 text-white space-y-6 py-7 px-2 pr-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Link
          href="/"
          className="text-white flex items-center space-x-2 px-4"
          aria-current="page"
        >
          <span>
            <svg
              className="h-8 w-8 fill-current text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-current text-gray-300"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM4.27 9.73a8 8 0 0111.32 0l-5.66 5.66a2 2 0 01-2.83 0L4.27 9.73z"
              />
            </svg>
          </span>
          <span className="text-2xl font-extrabold">PostPilot</span>
        </Link>

        {/* a button to create a new post */}

        <Link
          href={"/dashboard/posts/new"}
          className={`block py-2.5 px-4 text-sm rounded cursor-pointer transition duration-200 bg-purple-900 hover:bg-purple-600 text-white flex items-center ${
            activePage === "create" ? "bg-purple-600" : ""
          }`}
          onClick={() => setActivePage("create")}
        >
          Create/Schedule
          <PlusIcon className="h-5 w-5 ml-2" />
        </Link>

        <nav>
          <Link
            href="/dashboard"
            className={`block py-2.5 my-1 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white flex items-center ${
              activePage === "dashboard" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActivePage("dashboard")}
          >
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/schedule"
            className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white flex items-center ${
              activePage === "schedule" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActivePage("schedule")}
          >
            <CalendarIcon className="h-5 w-5 mr-2" />
            Schedule
          </Link>
          <Link
            href="/dashboard/posts"
            className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white flex items-center ${
              activePage === "posts" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActivePage("posts")}
          >
            <ListBulletIcon className="h-5 w-5 mr-2" />
            Posts
          </Link>
          <Link
            href="/dashboard/settings"
            className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white flex items-center ${
              activePage === "settings" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => setActivePage("settings")}
          >
            <Cog6ToothIcon className="h-5 w-5 mr-2" />
            Setings
          </Link>
        </nav>
      </div>
      <div className="absolute bottom-4"></div>
    </div>
  );
};

export default Sidebar;
