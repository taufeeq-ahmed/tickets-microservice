import axios from "axios";

const requestServer = axios.create({
    baseURL: 'https://ticketz.dev',
});

requestServer.interceptors.request.use(
    config => {
        // Modify request config here
        // For example, you can add headers, authentication tokens, etc.
        // config.headers['Authorization'] = 'Bearer token';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default requestServer;
