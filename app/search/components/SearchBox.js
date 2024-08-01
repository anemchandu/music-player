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
    const search = setTimeout(() => {
      router.push(`/search/${searchValue}`);
    }, 100);

    return () => {
      clearTimeout(search);
    };
  }, [searchValue]);

  return (
    <div className="flex-col md:gap-4 md:flex-row width-[380px] flex p-2 justify-between bg-black items-center md:gap-0 px-10 sticky top-0">
      <div className="flex items-center flex-col md:flex-row justify-between w-full ">
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
