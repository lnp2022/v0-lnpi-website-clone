import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    console.log("===== 환경 변수 디버그 API 시작 =====")

    // 기본 URL 계산 로직
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
    if (!baseUrl && process.env.VERCEL_URL) {
      baseUrl = `https://${process.env.VERCEL_URL}`
    }

    // 모든 환경 변수 목록 (값은 보안을 위해 마스킹)
    const envVars = {
      NODE_ENV: process.env.NODE_ENV || "설정되지 않음",
      VERCEL_ENV: process.env.VERCEL_ENV || "설정되지 않음",
      VERCEL_URL: process.env.VERCEL_URL || "설정되지 않음",
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "설정되지 않음",
      계산된_기본_URL: baseUrl || "계산할 수 없음",

      // SMS 관련 환경 변수
      COOLSMS_API_KEY: process.env.COOLSMS_API_KEY ? "설정됨" : "설정되지 않음",
      COOLSMS_API_SECRET: process.env.COOLSMS_API_SECRET ? "설정됨" : "설정되지 않음",
      ADMIN_PHONE_NUMBER: process.env.ADMIN_PHONE_NUMBER ? "설정됨" : "설정되지 않음",
      SENDER_PHONE_NUMBER: process.env.SENDER_PHONE_NUMBER ? "설정됨" : "설정되지 않음",

      // 이메일 관련 환경 변수
      EMAIL_HOST: process.env.EMAIL_HOST || "설정되지 않음",
      EMAIL_PORT: process.env.EMAIL_PORT || "설정되지 않음",
      EMAIL_USER: process.env.EMAIL_USER ? "설정됨" : "설정되지 않음",
      EMAIL_PASS: process.env.EMAIL_PASS ? "설정됨" : "설정되지 않음",
      EMAIL_FROM: process.env.EMAIL_FROM || "설정되지 않음",
      EMAIL_SECURE: process.env.EMAIL_SECURE || "설정되지 않음",
    }

    console.log("환경 변수 상태:", envVars)

    // 서버 정보
    const serverInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
    }

    return NextResponse.json({
      success: true,
      message: "환경 변수 및 서버 정보 확인 완료",
      envVars,
      serverInfo,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("환경 변수 디버그 API 실행 중 오류:", error)

    return NextResponse.json(
      {
        success: false,
        error: "환경 변수 디버그 API 실행 중 오류가 발생했습니다: " + (error.message || "알 수 없는 오류"),
        errorStack: error.stack || "스택 정보 없음",
      },
      { status: 500 },
    )
  } finally {
    console.log("===== 환경 변수 디버그 API 종료 =====")
  }
}
