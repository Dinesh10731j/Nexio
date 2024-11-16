
import axios from "axios";
import Cookies from "js-cookie";


const axiosInstance = axios.create({
   baseURL: 'http://localhost:7777/', //'https://nexio-api.onrender.com',    //'http://localhost:7777/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;