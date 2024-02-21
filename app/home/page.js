import React from "react";
import fetchSongs from "../../lib/fetchSongs";
import { FaSearch } from "react-icons/fa";
import { HiMiniQueueList } from "react-icons/hi2";
import TeluguSongs from "../components/TeluguSongs";
import EnglishSongs from "../components/EnglishSongs";

import Link from "next/link";

export const metadata = {
  title: "Trending Songs",
  description: "Music App Developed By Mavin",
  metadataBase: new URL("https://music-player-mavin.vercel.app/"),
};
export default async function HomePage() {
  const trendingSongs = await fetchSongs("telugu");

  const songs = trendingSongs.data.trending.songs;
  songs.length = 5;

  return (
    <>
      <div className="flex items-center justify-end px-6 bg-black text-white gap-4 sticky z-10 top-0">
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
      <TeluguSongs />
      <EnglishSongs />
    </>
  );
}
