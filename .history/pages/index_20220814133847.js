import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../utils/requests";
import { Helmet } from "react-helmet";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home = ({ results }) => {
  // console.log(results);

  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });
  if (status === "authenticated") {
    return (
      <div className=" overflow-x-hidden">
        <Head>
          <title>Hulu </title>

          <link rel="icon" href="/hulu.svg" />
        </Head>

        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Helmet>

        <Header />
        <Nav />
        <Results results={results} />
      </div>
    );
  }
};

export default Home;

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
