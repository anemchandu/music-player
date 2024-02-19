"use client";
import {
  selectcurrentSongIndex,
  selectSongQueue,
  playNextSong,
  playPrevSong,
} from "@/lib/Redux/musicSlice";
import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
export default function AudioPlayer() {
  const index = useSelector(selectcurrentSongIndex);
  const data = useSelector(selectSongQueue);
  const dispatch = useDispatch();

  return (
    <div className=" backdrop-blur-0 w-full ">
      {data && (
        <div className="flex m-5 shadow-sm shadow-white rounded-2xl">
          <img
            src={`${data[index].image[2].link}`}
            className="hidden md:block h-auto w-[150px] rounded-s-2xl"
          />
          <div className="w-full text-white font-dm font-bold rhap_container">
            <marquee className="mt-2" behavior="alternate">
              <p>{data[index].name}</p>
            </marquee>
            <H5AudioPlayer
              autoPlay
              src={`${data[index].downloadUrl[4].link}`}
              showSkipControls={true}
              onClickNext={() => {
                dispatch(playNextSong());
              }}
              onClickPrevious={() => {
                dispatch(playPrevSong());
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
