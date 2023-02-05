import httpRequest from "../utils/httpRequest";

// mediaType is "all"/"movie"/"tv"/"person".
// timeWindow is "day" or "week". View the trending list for the "day" or "week" 
const getTrendingList = (mediaType, timeWindow, params = {}) => {
    const path = `/trending/${mediaType}/${timeWindow}`;
    return httpRequest.get(path, { params })
}

export default getTrendingList;