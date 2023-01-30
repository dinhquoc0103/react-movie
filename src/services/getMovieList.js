import httpRequest from "../utils/httpRequest.js";

const movieType = {
    latest: "latest",
    popular: "popular",
    top_rated: "top_rated",
    upcoming: "upcoming",
}

const getMovieList = (type, params) => {
    const path = `movie/${type}`;
    return httpRequest.get(path, { params });
}

export { movieType };
export default getMovieList;