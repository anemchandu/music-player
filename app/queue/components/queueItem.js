"use client";
import { removeSongFromQueue, selectSongQueue } from "@/lib/Redux/musicSlice";
import React from "react";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function QueueItem() {
  const data = useSelector(selectSongQueue);
  const dispatch = useDispatch();
  return !data ? (
    <div className="bg-black h-[94vh] overflow-hidden w-full flex justify-center items-center text-white">
      <p className=" font-dm md:text-xl">Queue Is Empty</p>
    </div>
  ) : (
    <div className="text-white p-5 flex flex-col items-center gap-4 w-full font-dm font-bold ">
      <p>Songs Currently In Queue</p>
      {data.map((ele, index) => {
        return (
          <div className="flex text-white font-dm text-xl gap-5" key={ele.id}>
            <p>{index + 1}</p>
            <p>{ele.name}</p>
            <MdDelete
              className="cursor-pointer"
              size={30}
              onClick={() => {
                toast("Removed From Queue", {
                  icon: <MdDelete color="red" size={20} />,
                });
                dispatch(removeSongFromQueue(ele.id));
                toast("Removed Successfully", {
                  icon: <MdDelete color="red" size={20} />,
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
