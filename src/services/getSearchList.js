import httpRequest from "../utils/httpRequest";

const getSearchList = (searchValue, params) => {
    const path = `/search/multi`;
    return httpRequest.get(path, { params });
}

export default getSearchList;