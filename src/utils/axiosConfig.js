import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        'api_key': apiConfig.apiKey
    }
})
const axiosMovieChill = axios.create({
    baseURL: 'http://localhost:3001/'
})
axiosClient.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
// paramsSerializer: params => qs.stringify({...params, 'api-key': apiConfig.apiKey}, {arrayFormat:'brackets'})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
})

axiosMovieChill.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, async function (error) {
    if (error.response.status === 404) {
        return error.response.status;
    }
    const originalRequest = error.config;
    console.log(originalRequest);
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const response = await axios.post("http://localhost:3001/refesh", {
            refeshToken: localStorage.getItem('refeshToken')
        });
        const access_token = response.data;
        console.log(access_token);
        localStorage.setItem('accessToken', access_token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
        originalRequest.headers = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        return axios(originalRequest);
    }
    // if(error.response.status === 409){
    //     console.log("user not found");
    // }
    return Promise.reject(error);
})


// export const get = async (path, options = {}) => {
//     const response = await axiosClient.get(path, options);
//     return response.data;
// }

export {axiosClient, axiosMovieChill};
