import React from "react";
import Image from "next/image";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  console.log(result);
  return (
    <div>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={480}
        width={720}
      />

      <div className="p-2">
        <p className="truncate max-w-md"> {result.overview}</p>
      </div>
    </div>
  );
}
