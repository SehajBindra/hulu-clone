import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  console.log(result);
  return (
    <div className="group cursor-pointer">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out">
          {result.title || result.orginal_name}
        </h2>
        <p className="truncate max-w-md"> {result.overview}</p>

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
