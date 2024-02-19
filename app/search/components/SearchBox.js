"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

export default function SearchBox() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    router.push(`/search/${searchValue}`);
  }, [searchValue]);

  return (
    <div className="flex-col gap-4 md:flex-row width-[380px] flex p-2 justify-between bg-black items-center md:gap-0 px-10 ">
      <div>
        <Link
          href={"/home"}
          className="flex items-center gap-3 hover:scale-105 duration-300 hover:brightness-90 hover:from-gray-800 hover:to-gray-950 hover:shadow-lg hover:shadow-green-900"
        >
          <FaHome color="white" className="" size={20} />
          <p className="text-white font-sans font-bold  text-xl ">Home</p>
        </Link>
      </div>
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
  );
}
