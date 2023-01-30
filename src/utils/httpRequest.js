import axios from "axios";
import queryString from "query-string";

import config from "../config";

const httpRequest = axios.create({
    baseURL: config.theMovieApi.baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    paramsSerializer: {
        serialize: params => {
            return queryString.stringify({ ...params, api_key: config.theMovieApi.apiKey });
        }
    },
});

// httpRequest.interceptors.request.use();

httpRequest.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => { throw new Error(error) });



export default httpRequest;