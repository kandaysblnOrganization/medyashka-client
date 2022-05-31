import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

axiosInstance.interceptors.request.use((config) => {
    if (config && config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    }
})

const authAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export {
    authAxiosInstance as agentAuth,
    axiosInstance as agent
};