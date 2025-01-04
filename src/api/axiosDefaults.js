import axios from "axios";

// Set global defaults for axios
axios.defaults.baseURL = "https://fitshareapi-b9588b2c11b9.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Create and export custom axios instances
export const axiosReq = axios.create();
export const axiosRes = axios.create();
