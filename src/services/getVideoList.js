import httpRequest from "../utils/httpRequest.js";

const movieCategory = {
    movie: "movie",
    tv: "tv",
}

const getVideoList = (categories, id) => {
    const path = `${categories}/${id}/videos`;
    return httpRequest.get(path, { params: {} });
}

export { movieCategory };
export default getVideoList;