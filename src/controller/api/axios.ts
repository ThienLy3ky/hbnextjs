import axios from "axios";
import { NextRequest } from "next/server";
// console.log(process.env.SERVER_URL);
// console.log(NextRequest);

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default axiosInstance;
