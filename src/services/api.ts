import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dtmoney-ten-xi.vercel.app/api',
})
