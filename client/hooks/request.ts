import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ticketz.dev',
});

export default request
