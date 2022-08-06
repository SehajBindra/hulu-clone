const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  },
  // fetchTopRated: {
  //   title: "Top Rated",
  //   url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // },
  fetchNetflixOriginals: {
    title: "Netflix Originals",
    url: `/discover/tv/?api_key=${API_KEY}&with_networks=213&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },

  fetchScifiMovies: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },

  fetchAnime: {
    title: "Anime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },

  fetchThriller: {
    title: "Popular",
    url: `//tv/latest?api_key=${API_KEY}&language=en-US`,
  },
};
