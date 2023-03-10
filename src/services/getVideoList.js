import httpRequest from "../utils/httpRequest.js";

const getVideoList = (categories, id, params = {}) => {
    const path = `${categories}/${id}/videos`;
    return httpRequest.get(path, { params });
}

export default getVideoList;