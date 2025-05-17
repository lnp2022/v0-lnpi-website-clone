import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  try {
    console.log("===== 테스트 SMS API 라우트 시작 =====")

    // 환경 변수 확인 - 이 부분만 먼저 실행하여 환경 변수 상태 확인
    const apiKey = process.env.COOLSMS_API_KEY
    const apiSecret = process.env.COOLSMS_API_SECRET
    const adminPhone = process.env.ADMIN_PHONE_NUMBER
    const senderPhone = process.env.SENDER_PHONE_NUMBER

    // 환경 변수 상태 반환 (실제 값은 보안을 위해 마스킹)
    const envStatus = {
      COOLSMS_API_KEY: apiKey ? `설정됨 (${apiKey.substring(0, 3)}...)` : "설정되지 않음",
      COOLSMS_API_SECRET: apiSecret ? `설정됨 (${apiSecret.substring(0, 3)}...)` : "설정되지 않음",
      ADMIN_PHONE_NUMBER: adminPhone ? `설정됨 (${adminPhone.replace(/\d(?=\d{4})/g, "*")})` : "설정되지 않음",
      SENDER_PHONE_NUMBER: senderPhone ? `설정됨 (${senderPhone.replace(/\d(?=\d{4})/g, "*")})` : "설정되지 않음",
    }

    console.log("환경 변수 상태:", envStatus)

    // 환경 변수 검증
    if (!apiKey || !apiSecret || !adminPhone || !senderPhone) {
      console.log("필수 환경 변수가 누락되었습니다.")
      return NextResponse.json({
        success: false,
        error: "SMS 전송에 필요한 환경 변수가 설정되지 않았습니다.",
        envStatus,
      })
    }

    // 여기까지 실행되면 환경 변수는 모두 설정된 상태

    // 간단한 테스트 메시지 구성
    const testMessage = `[테스트] 엘엔피 홈페이지 테스트 메시지입니다. 시간: ${new Date().toLocaleString()}`

    // 이 시점에서는 실제 SMS 전송을 시도하지 않고 환경 변수 상태만 반환
    return NextResponse.json({
      success: true,
      message: "환경 변수 확인 완료. SMS 전송 준비가 되었습니다.",
      envStatus,
      testMessage,
    })
  } catch (error) {
    console.error("테스트 API 실행 중 오류:", error)

    // 오류 정보 구성
    const errorInfo = {
      message: error.message || "알 수 없는 오류",
      stack: error.stack || "스택 정보 없음",
      name: error.name || "오류 이름 없음",
    }

    return NextResponse.json(
      {
        success: false,
        error: "테스트 API 실행 중 오류가 발생했습니다: " + errorInfo.message,
        errorInfo,
      },
      { status: 500 },
    )
  } finally {
    console.log("===== 테스트 SMS API 라우트 종료 =====")
  }
}
