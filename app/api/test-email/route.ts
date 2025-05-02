import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    console.log("===== 간소화된 이메일 테스트 API 시작 =====")

    // 환경 변수 확인만 수행
    const emailConfig = {
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: process.env.EMAIL_PORT || "587",
      secure: process.env.EMAIL_SECURE === "true",
      user: process.env.EMAIL_USER || "2022landp@gmail.com",
      pass: process.env.EMAIL_PASS ? "설정됨" : "설정되지 않음",
      from: process.env.EMAIL_FROM || "2022landp@gmail.com",
    }

    // 서버 정보 확인
    const serverInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
    }

    console.log("이메일 설정:", emailConfig)
    console.log("서버 정보:", serverInfo)

    // 간단한 응답 반환
    return NextResponse.json({
      success: true,
      message: "환경 변수 확인 완료",
      emailConfig,
      serverInfo,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("테스트 API 오류:", error)

    // 오류 정보 상세 로깅
    if (error instanceof Error) {
      console.error("오류 이름:", error.name)
      console.error("오류 메시지:", error.message)
      console.error("오류 스택:", error.stack)
    } else {
      console.error("알 수 없는 오류 객체:", error)
    }

    return NextResponse.json(
      {
        success: false,
        error: "테스트 API 오류: " + (error instanceof Error ? error.message : String(error)),
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  } finally {
    console.log("===== 간소화된 이메일 테스트 API 종료 =====")
  }
}
