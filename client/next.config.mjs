/** @type {import('next').NextConfig} */
import path from "path"

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['@'] = path.join(process.cwd(), '.');
        }
        return config;
    },
};

export default nextConfig;
