import React from "react";
import Image from "next/image";

export default function Thumnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
  return (
    <div>
      <Image
        className="w-100 h-100"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
    </div>
  );
}
