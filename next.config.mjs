/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ 외부 이미지(Vercel Blob Storage) 허용 설정
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* 여기에 다른 설정이 필요하면 나중에 추가하면 됩니다 */
};

export default nextConfig;