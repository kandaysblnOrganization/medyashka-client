import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.MEDYASHKA_API_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})