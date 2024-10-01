/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIEPARTY_API_URL:
      process.env.MOVIEPARTY_API_URL ?? "http://localhost:3001/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fr.web.img*.acsta.net",
        port: "",
        pathname: "/c_75_100/**",
      },
    ],
  },
};

export default nextConfig;
