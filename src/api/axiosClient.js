import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export default axiosClient;
