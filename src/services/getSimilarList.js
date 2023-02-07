import httpRequest from "../utils/httpRequest.js";

const getSimilarList = (category, movieId, params = {}) => {
    const path = `${category}/${movieId}/similar`;
    return httpRequest.get(path, { params });
}

export default getSimilarList;