"use client";
import { fetchSongInfo, addToQueue } from "@/lib/Redux/musicSlice";
import toast from "react-hot-toast";
import React, { useRef } from "react";
import { FaPlus, FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export default function MusicCard({ name, primaryArtists, image, album, id }) {
  const currRef = useRef();
  const dispatch = useDispatch();
  function add(id) {
    dispatch(addToQueue(id));
    toast("Added to Queue", { position: "top-center", duration: 2000 });
  }

  return (
    <div className="rounded-lg w-[255px] h-[400px]  font-dm p-2 flex flex-col hover:brightness-90 hover:from-gray-800 hover:to-gray-950 hover:shadow-lg hover:shadow-green-900">
      <img src={image[2].link} className="w-[255px] h-[257px]" />
      <div className="flex flex-col font-sans flex-wrap gap-2 p-1">
        <p className="font-bold">{name.split(" ")[0]}</p>
        <p>By {primaryArtists[0]?.name}</p>
        <div className="w-full h-auto flex items-center justify-between px-2 mt-3">
          <div
            className="rounded-full h-[50px] pl-1 bg-white w-[50px] flex justify-center items-center cursor-pointer duration-300 transform"
            onClick={() => {
              dispatch(fetchSongInfo(id));
            }}
          >
            <FaPlay color="black" size={20} />
          </div>
          <div
            className="  rounded-full h-[50px]  cursor-pointer bg-white w-[50px] flex justify-center items-center duration-300 transform"
            onClick={() => {
              add(id);
            }}
          >
            <FaPlus color="black" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
