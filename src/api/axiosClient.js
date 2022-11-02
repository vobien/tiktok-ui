import axios from 'axios';

// console.log(process.env);
// console.log(process.env.REACT_APP_BASE_URL);

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axiosClient;
