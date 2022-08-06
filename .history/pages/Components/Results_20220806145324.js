import Thumnail from "./Thumnail";
import Image from "next/image";
function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
