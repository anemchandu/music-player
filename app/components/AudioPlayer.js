"use client";
import {
  selectcurrentSongIndex,
  selectSongQueue,
  playNextSong,
  playPrevSong,
} from "@/lib/Redux/musicSlice";
import React, { useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { TiArrowMinimise } from "react-icons/ti";
export default function AudioPlayer() {
  const index = useSelector(selectcurrentSongIndex);
  const data = useSelector(selectSongQueue);
  const dispatch = useDispatch();
  const [isMinimized, setMinimized] = useState(false);

  console.log(data);

  return (
    <div
      className={
        isMinimized
          ? "w-[200px] "
          : "backdrop-blur-0 w-full fixed bottom-0 mr-4"
      }
    >
      {data && (
        <div
          className={
            isMinimized
              ? "m-5 w-auto rounded-full"
              : "flex m-5 shadow-sm shadow-white rounded-2xl w-auto"
          }
        >
          <img
            src={`${data[index]?.image[2]?.url}`}
            className={
              !isMinimized
                ? "hidden md:block h-auto w-[150px] rounded-s-2xl cursor-pointer"
                : "h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full animate-spin-slow duration-700 cursor-pointer"
            }
            onClick={() => {
              setMinimized(!isMinimized);
            }}
          />
          <div
            className={
              isMinimized
                ? "hidden"
                : "text-white font-dm font-bold rhap_container w-0"
            }
          >
            <div className="flex">
              <marquee className="mt-2" behavior="alternate">
                <p>{data[index].name}</p>
              </marquee>
              <TiArrowMinimise
                size={30}
                onClick={() => {
                  setMinimized(!isMinimized);
                }}
                className="cursor-pointer"
              />
            </div>

            <H5AudioPlayer
              autoPlay
              src={`${data[index].downloadUrl[4].url}`}
              showSkipControls={true}
              onClickNext={() => {
                dispatch(playNextSong());
              }}
              onClickPrevious={() => {
                dispatch(playPrevSong());
              }}
              onEnded={() => {
                dispatch(playNextSong());
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
