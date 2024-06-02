import axios from "axios";

export const dashboardApi = axios.create({
  baseURL: "http://localhost:3000",
});
