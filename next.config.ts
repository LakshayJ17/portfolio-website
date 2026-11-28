import type { NextConfig } from "next";

const RESUME = "/resume/Lakshay_Jain_Software_Engineer_Resume.pdf";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/resume", destination: RESUME, permanent: false },
      { source: "/resume/Lakshay_Jain_FullStackDev_Resume.pdf", destination: RESUME, permanent: false },
      { source: "/resume/Lakshay_Jain_FullStackDeveloper.pdf", destination: RESUME, permanent: false },
    ];
  },
};

export default nextConfig;
