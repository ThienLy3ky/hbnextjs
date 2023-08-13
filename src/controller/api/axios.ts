import axios from "axios";
// console.log(process.env.SERVER_URL === "http://localhost:8686/");

const axiosInstance = axios.create({
  baseURL: `http://localhost:8686`,
});

export default axiosInstance;
