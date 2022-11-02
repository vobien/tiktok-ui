import axios from 'axios';

// console.log(process.env);

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axiosClient;
