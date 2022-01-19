import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://myclothesshop.herokuapp.com/api/",
});
