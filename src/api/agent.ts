import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

const authAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export {
    authAxiosInstance as agentAuth,
    axiosInstance as agent
};