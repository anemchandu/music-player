"use client";
import {
  selectcurrentSongIndex,
  selectSongQueue,
} from "@/lib/Redux/musicSlice";
import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
export default function AudioPlayer() {
  const index = useSelector(selectcurrentSongIndex);
  const data = useSelector(selectSongQueue);

  return (
    <div className=" backdrop-blur-0 w-full ">
      {data && (
        <H5AudioPlayer autoPlay src={`${data[index].downloadUrl[4].link}`} />
      )}
    </div>
  );
}
