import isServer from "@/utils/is-server";
import axios from "axios";

const SERVER_URL = 'https://api.ticketz.dev'
const SERVER_INGRESS_URL = ""

const BASE_URL = isServer() ? SERVER_INGRESS_URL : SERVER_URL

const requestServer = axios.create({
    baseURL: BASE_URL,
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
