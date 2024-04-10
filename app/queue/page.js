import Link from "next/link";
import React from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import QueueItem from "./components/queueItem";
import { HiMiniQueueList } from "react-icons/hi2";
export const metadata = {
  title: "Songs Queue",
  description: "Music App Developed By Mavin",
  metadataBase: new URL("https://music-player-mavin.vercel.app/"),
};

export default function page() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-800 h-screen font-dm font-bold">
      <div className="flex items-center justify-between px-6 bg-black text-white gap-4 sticky z-10 top-0 ">
        <div className="flex items-center justify-between w-full">
          <Link href={"/queue"}>
            <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
              <p className="hidden md:block">Queue</p>
              <HiMiniQueueList size={20} />
            </button>
          </Link>
          <Link href={"/search"}>
            <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
              <p className="hidden md:block">Search More</p>{" "}
              <FaSearch size={20} />
            </button>
          </Link>
        </div>
      </div>
      <QueueItem />
    </div>
  );
}
