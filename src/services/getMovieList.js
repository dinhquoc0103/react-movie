import httpRequest from "../utils/httpRequest.js";

const getMovieList = (type, params) => {
    const path = `movie/${type}`;
    return httpRequest.get(path, { params });
}

export default getMovieList;