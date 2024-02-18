import fetchSongs from "@/lib/fetchSongs";
import React from "react";
import MusicCard from "./MusicCard";

export default async function HindiSongs() {
  const trendingSongs = await fetchSongs("hindi");

  const songs = trendingSongs.data.trending.songs;
  songs.length = 5;
  return (
    <div className="bg-black text-white flex flex-col items-center ">
      <h4 className="font-sans font-bold mt-6 text-xl hover:brightness-90 hover:from-gray-800 hover:to-gray-950 hover:shadow-lg hover:shadow-green-900">
        Trending Hindi Songs
      </h4>
      <div className="bg-black text-white h-auto justify-evenly w-full flex  flex-wrap gap-1 p-8">
        {songs?.map((song) => (
          <MusicCard key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
}
