import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://myclothesstore.netlify.app/api/",
});
