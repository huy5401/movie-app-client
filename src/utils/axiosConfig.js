import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type':'application/json'
    },
    params: {
        'api_key' : apiConfig.apiKey
    }    
})
// paramsSerializer: params => qs.stringify({...params, 'api-key': apiConfig.apiKey}, {arrayFormat:'brackets'})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error) => {
    throw error
}) 

// export const get = async (path, options = {}) => {
//     const response = await axiosClient.get(path, options);
//     return response.data;
// }

export default axiosClient;
