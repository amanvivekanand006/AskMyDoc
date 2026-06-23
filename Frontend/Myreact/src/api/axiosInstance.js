import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://askmydoc-e0ih.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
