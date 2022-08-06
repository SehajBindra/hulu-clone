import React from "react";
import Image from "next/dist/client/image";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
  console.log(result);
  return (
    <div>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <p className="truncate max-w-md"> {result.overview}</p>
      </div>
    </div>
  );
}
