import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://myclothstore.netlify.app/api/",
});
