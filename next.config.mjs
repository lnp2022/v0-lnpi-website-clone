/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 설정 유지
  reactStrictMode: true,
  swcMinify: true,

  // API 라우트 관련 설정 추가
  experimental: {
    appDir: true, // App Router 사용 명시적 활성화
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 환경 변수 설정 추가
  env: {
    VERCEL_URL: 'localhost:3000',
  }
}

export default nextConfig
