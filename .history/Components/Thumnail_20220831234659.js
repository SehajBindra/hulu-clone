import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className=" p-2 pt-1 overflow-hidden group cursor-pointer transition-all duratiion-200 ease-in transform sm:hover:scale-125 hover:z-50 rounded-xl">
      <Image
        className=" p-2 rounded-lg overflow-x-hidden  sm:max-w-sm   sm:rounded-lg md:max-w-md md:p-2 lg:max-w-2xl lg:p-2"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div className="p-2 max-w-xs">
        <h2 className="mt-1 mb-2 text-lg text-white transition-all duration-100 ease-in-out  group-hover:font-semibold sm:text-2xl">
          {result.title || result.original_name}
        </h2>
        <p className="truncate text-md max-w-sm sm:max-w-sm lg:max-w-xl xl:max-w-2xl">
          {" "}
          {result.overview}
        </p>

        <p className="flex items center opacity-0 group-hover:opacity-100">
          {/* {result.media_type && `${result.media_type}·`} */}
          {result.release_date || result.first_air_date} ·
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
