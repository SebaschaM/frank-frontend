import axios from "axios";

export const dashboardApi = axios.create({
  baseURL: "https://frankbackend-i6aa.onrender.com",
});
