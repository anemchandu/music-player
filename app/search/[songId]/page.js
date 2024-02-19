import fetchSearchDetails from "@/lib/fetchSearchDetails";
import React from "react";
import SongComponent from "./Components/SongComponent";

export default async function SearchPage({ params }) {
  const searchResults = await fetchSearchDetails(params.songId);

  const songs = searchResults.data.results;

  return songs?.length === 0 ? (
    <div className="flex bg-black text-white font-dm justify-center items-center h-[92vh] text-xl font-bold">
      <p>OOPS!! No Songs Found</p>
    </div>
  ) : (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white flex flex-col gap-4">
      {songs.map((song, index) => (
        <SongComponent {...song} key={song.id} index={index} />
      ))}
    </div>
  );
}
