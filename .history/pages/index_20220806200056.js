import Head from "next/head";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>Hulu </title>

        <link rel="icon" href="/hulu.svg" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
