import axios from "axios";

// Set the base URL of your deployed DRF API
axios.defaults.baseURL = "https://fitshareapi-b9588b2c11b9.herokuapp.com/";

// Set the content-type header
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

// Ensure cookies are sent with requests
axios.defaults.withCredentials = true;
