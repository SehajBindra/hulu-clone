import React from "react";
import Image from "next/dist/client/image";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
  console.log(result);
  return (
    <div>
      <Image
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path}`}
        height={1920}
        width={1080}
      />

      <div className="p-2">
        <p className="truncate max-w-md"> {result.overview}</p>
      </div>
    </div>
  );
}
