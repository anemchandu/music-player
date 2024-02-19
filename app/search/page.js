import React from "react";
export const metadata = {
  title: "Search Songs",
  description: "Start Searching for millions of songs",
  metadataBase: new URL("https://music-player-mavin.vercel.app/"),
};
export default function SearchPage() {
  return (
    <div className="bg-black h-[94vh] overflow-hidden w-full flex justify-center items-center text-white">
      <p className=" font-dm md:text-xl">
        Start Searching for millions of songs
      </p>
    </div>
  );
}
