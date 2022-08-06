import { Thumnail } from "./Thumnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-8  my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl: flex justify-center flex-wrap">
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
