/** @type {import('next').NextConfig} */
import path from "path"

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

export default nextConfig;
