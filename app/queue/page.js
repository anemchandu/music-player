"use client";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import QueueItem from "./components/queueItem";
import { HiMiniQueueList } from "react-icons/hi2";

export default function page() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-800 h-screen ">
      <div className="flex items-center justify-end px-6 bg-black text-white gap-4 sticky z-10 top-0 ">
        <Link href={"/search"}>
          <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
            <p className="hidden md:block">Search More</p>{" "}
            <FaSearch size={20} />
          </button>
        </Link>
        <Link href={"/queue"}>
          <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
            <p className="hidden md:block">Queue</p>
            <HiMiniQueueList size={20} />
          </button>
        </Link>
      </div>
      <QueueItem />
    </div>
  );
}
