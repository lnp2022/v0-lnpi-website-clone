import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // 단계 1: 기본 정보 확인
    console.log("단계 1: 기본 정보 확인")
    const step1 = {
      serverTime: new Date().toISOString(),
      url: request.url,
    }

    // 단계 2: 환경 변수 확인
    console.log("단계 2: 환경 변수 확인")
    const step2 = {
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
    }

    // 단계 3: 이메일 설정 확인
    console.log("단계 3: 이메일 설정 확인")
    const step3 = {
      emailHost: process.env.EMAIL_HOST || "기본값",
      emailPort: process.env.EMAIL_PORT || "기본값",
      emailUser: process.env.EMAIL_USER ? "설정됨" : "설정되지 않음",
    }

    // 모든 단계 완료
    return NextResponse.json({
      success: true,
      message: "단계별 테스트가 성공적으로 완료되었습니다.",
      steps: {
        step1,
        step2,
        step3,
      },
    })
  } catch (error) {
    console.error("단계별 테스트 오류:", error)
    return NextResponse.json(
      {
        success: false,
        error: "단계별 테스트 오류: " + (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 },
    )
  }
}
