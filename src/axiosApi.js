import axios from 'axios';


const axiosApi = axios.create({
    baseURL: 'http://localhost:3300'
});

export default axiosApi