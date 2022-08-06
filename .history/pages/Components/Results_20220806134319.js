import Thumnail from "./Thumnail";
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
