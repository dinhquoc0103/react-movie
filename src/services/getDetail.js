import httpRequest from "../utils/httpRequest";

const getDetail = (category, movieId, params = {}) => {
    const path = `/${category}/${movieId}`;
    return httpRequest.get(path, { params });
}

export default getDetail;