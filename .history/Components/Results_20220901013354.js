import Thumnail from "./Thumnail";

function Results({ results }) {
  console.log(results);
  return (
    <div className="px-8 sm:py-6 sm:shadow-inner overflow-y-hidden overflow-x-hidden  my-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl: flex justify-center flex-wrap">
      {results?.map((result) => (
        <Thumnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
