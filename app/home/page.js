import React from "react";
import fetchSongs from "../../lib/fetchSongs";
import { FaSearch } from "react-icons/fa";
import MusicCard from "../components/MusicCard";
import TeluguSongs from "../components/TeluguSongs";
import EnglishSongs from "../components/EnglishSongs";
import HindiSongs from "../components/HindiSongs";
import Link from "next/link";
export default async function HomePage() {
  const trendingSongs = await fetchSongs("telugu");

  const songs = trendingSongs.data.trending.songs;
  songs.length = 5;

  return (
    <>
      <div className="flex items-center justify-end px-6 bg-black text-white gap-4">
        <Link href={"/search"}>
          <button className="flex items-center gap-4 p-4 hover:shadow-md hover:shadow-white duration-500 rounded-2xl mt-3">
            Search More <FaSearch size={20} />
          </button>
        </Link>
      </div>
      <TeluguSongs />
      <EnglishSongs />
      <HindiSongs />
    </>
  );
}
