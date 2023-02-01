import httpRequest from "../utils/httpRequest.js";

const getTvList = (type, params = {}) => {
    const path = `tv/${type}`;
    return httpRequest.get(path, { params });
}

export default getTvList;