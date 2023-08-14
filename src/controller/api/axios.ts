import axios from "axios";
// console.log(process.env.SERVER_URL);

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default axiosInstance;
