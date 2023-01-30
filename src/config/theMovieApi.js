const theMovieApi = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: "ac368b10892d66120c6d54b56e946281",
    // backdrop_path or poster_path property
    originalImg: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    // backdrop_path property
    w500Img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default theMovieApi;