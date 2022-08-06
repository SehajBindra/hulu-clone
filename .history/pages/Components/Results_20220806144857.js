import Thumnail from "./Thumnail";
import Image from "next/image";
function Results({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
  return (
    <div>
      {/* {results.map((result) => ( */}
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={1920}
        height={1080}
      />
      // <Thumnail key={result.id} result={result} />
      {/* ))} */}
    </div>
  );
}

export default Results;
