import Thumnail from "./Thumnail";
function Results({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
  return (
    <div>
      {results.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
