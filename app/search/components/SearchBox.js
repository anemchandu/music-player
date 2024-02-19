"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiMiniQueueList } from "react-icons/hi2";

export default function SearchBox() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    router.push(`/search/${searchValue}`);
  }, [searchValue]);

  return (
    <div className="flex-col md:gap-4 md:flex-row width-[380px] flex p-2 justify-between bg-black items-center md:gap-0 px-10 sticky top-0">
      <div>
        <Link
          href={"/home"}
          className="flex items-center gap-3 hover:scale-105 duration-300 hover:brightness-90 hover:from-gray-800 hover:to-gray-950 hover:shadow-lg hover:shadow-green-900"
        >
          <FaHome color="white" className="" size={20} />
          <p className="text-white font-dm font-bold  text-xl ">Home</p>
        </Link>
      </div>
      <div className="flex items-center flex-col md:flex-row ">
        <Link href={"/queue"} className="text-white font-dm">
          <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
            <p className="block font-bold  text-xl ">Queue</p>
            <HiMiniQueueList size={20} />
          </button>
        </Link>

        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border font-dm text-gray text-sm rounded-lg p-3 w-[300px]"
          placeholder="Search Your Favorite Songs..."
          required
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
