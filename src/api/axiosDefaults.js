import axios from "axios";

axios.defaults.baseURL = "https://fitshareapi-b9588b2c11b9.herokuapp.com/"; // API base URL with trailing slash
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true; // Allow cookies for authentication

export default axios;
