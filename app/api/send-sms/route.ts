import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    console.log("===== SMS 전송 API 시작 =====")

    // 요청 본문 파싱
    let body
    try {
      body = await request.json()
      console.log("요청 본문:", JSON.stringify(body))
    } catch (error) {
      console.error("요청 본문 파싱 오류:", error)
      return NextResponse.json(
        {
          success: false,
          error: "잘못된 요청 형식입니다.",
        },
        { status: 400 },
      )
    }

    // 필수 필드 검증
    const { name, phone, inquiryType, message } = body
    if (!name || !phone || !inquiryType || !message) {
      console.error("필수 필드 누락:", { name, phone, inquiryType, message: message?.substring(0, 20) })
      return NextResponse.json(
        {
          success: false,
          error: "필수 필드가 누락되었습니다.",
        },
        { status: 400 },
      )
    }

    // 환경 변수 확인
    const apiKey = process.env.COOLSMS_API_KEY
    const apiSecret = process.env.COOLSMS_API_SECRET
    const adminPhone = process.env.ADMIN_PHONE_NUMBER
    const senderPhone = process.env.SENDER_PHONE_NUMBER

    if (!apiKey || !apiSecret || !adminPhone || !senderPhone) {
      console.error("필수 환경 변수가 누락되었습니다.")
      return NextResponse.json(
        {
          success: false,
          error: "SMS 전송에 필요한 환경 변수가 설정되지 않았습니다.",
        },
        { status: 500 },
      )
    }

    // SMS 내용 구성
    const smsContent = `[엘엔피 홈페이지] 새 문의가 등록되었습니다.
이름: ${name}
연락처: ${phone}
문의유형: ${inquiryType}
문의내용: ${message.substring(0, 50)}${message.length > 50 ? "..." : ""}`

    console.log("SMS 내용:", smsContent)

    // 실제 환경에서는 SMS를 전송하지만, 현재는 성공 응답만 반환
    // 실제 SMS 전송 코드는 문제 해결 후 다시 추가할 예정

    return NextResponse.json({
      success: true,
      message: "SMS 전송 요청이 처리되었습니다. (테스트 모드)",
      details: {
        to: adminPhone.replace(/\d(?=\d{4})/g, "*"),
        from: senderPhone.replace(/\d(?=\d{4})/g, "*"),
        content: smsContent.substring(0, 30) + "...",
      },
    })
  } catch (error) {
    console.error("SMS 전송 API 실행 중 오류:", error)

    return NextResponse.json(
      {
        success: false,
        error: "SMS 전송 중 오류가 발생했습니다: " + (error.message || "알 수 없는 오류"),
        errorStack: error.stack || "스택 정보 없음",
      },
      { status: 500 },
    )
  } finally {
    console.log("===== SMS 전송 API 종료 =====")
  }
}
