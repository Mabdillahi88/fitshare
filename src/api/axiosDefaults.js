import axios from "axios";

// Set the base URL for the API
axios.defaults.baseURL = "https://fitshareapi-b9588b2c11b9.herokuapp.com/"; // API base URL
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; // Default header for POST requests
axios.defaults.withCredentials = true; // Allow cookies for authentication

// Create separate axios instances for requests and responses
export const axiosReq = axios.create(); // For making API requests
export const axiosRes = axios.create(); // For handling API responses
