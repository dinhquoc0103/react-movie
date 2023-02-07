import httpRequest from "../utils/httpRequest.js";

const getCredits = (categories, id, params = {}) => {
    const path = `${categories}/${id}/credits`;
    return httpRequest.get(path, { params });
}

export default getCredits;