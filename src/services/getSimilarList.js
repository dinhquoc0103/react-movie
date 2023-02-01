import httpRequest from "../utils/httpRequest.js";

const getSimilarList = (category, movieId) => {
    const path = `${category}/${movieId}/similar`;
    return httpRequest.get(path, { params: {} });
}

export default getSimilarList;