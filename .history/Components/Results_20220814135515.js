import Thumnail from "./Thumnail";

function Results({ results }) {
  console.log(results);
  return (
    <div className="px-7 overflow-x-hidden  my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl: flex justify-center flex-wrap">
      {results?.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
