import Thumnail from "./Thumnail";

function Results({ results }) {
  return (
    <div className="px-5 my-10">
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
