import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  console.log(result);
  return (
    <div
      ref={ref}
      className=" p-8 group cursor-pointer transition-all duratiion-200 ease-in transform sm:hover:scale-125 hover:z-50 rounded-xl"
    >
      <img
        className=" max-w-xs rounded-lg  md:max-w-md lg:mx-w-lg "
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div className="p-8">
        <h2 className="mt-1 text-xl text-white transition-all duration-100 ease-in-out  group-hover:font-semibold sm:text-2xl">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-sm md:max-w-md"> {result.overview}</p>

        <p className="flex items center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}·`}
          {result.release_date || result.first_air_date} ·
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumnail;
