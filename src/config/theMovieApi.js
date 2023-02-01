const theMovieApi = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: "ac368b10892d66120c6d54b56e946281",
    categories: {
        movie: "movie",
        tv: "tv",
    },
    movieType: {
        popular: "popular",
        topRated: "top_rated",
        upcoming: "upcoming",
    },
    tvType: {
        popular: "popular",
        onTheAir: "on_the_air",
        topRated: "top_rated",
    },

    // backdrop_path or poster_path property
    originalImg: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    // backdrop_path property
    w500Img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,



}

export default theMovieApi;