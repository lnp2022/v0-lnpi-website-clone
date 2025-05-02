import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  console.log("===== 이메일 전송 API 시작 =====")

  try {
    // 요청 본문 파싱
    const body = await request.json()
    const { name, phone, inquiryType, message } = body

    console.log("요청 데이터:", { name, phone, inquiryType, message: message?.substring(0, 20) + "..." })

    // 필수 필드 검증
    if (!name || !phone || !inquiryType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "필수 필드가 누락되었습니다.",
        },
        { status: 400 },
      )
    }

    // 이메일 설정
    const emailConfig = {
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      user: "2022landp@gmail.com", // 항상 이 이메일로 설정
      pass: process.env.EMAIL_PASS || "gkwgurbkbayrxdxi",
      from: process.env.EMAIL_FROM || "2022landp@gmail.com",
    }

    console.log("이메일 설정:", {
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      user: emailConfig.user ? "설정됨" : "설정되지 않음",
      pass: emailConfig.pass ? "설정됨" : "설정되지 않음",
      from: emailConfig.from,
    })

    // 환경 변수 유효성 검사
    if (!emailConfig.user || !emailConfig.pass) {
      return NextResponse.json(
        {
          success: false,
          error: "이메일 계정 정보가 설정되지 않았습니다.",
        },
        { status: 500 },
      )
    }

    // 이메일 내용 구성
    const inquiryTypeText =
      {
        all: "(주)엘엔피 판매 모든 상품 구매 문의",
        ceiling: "우물천장 프레임 구매 문의",
        switch: "GUGU 무선 스위치 구매 문의",
        service: "GUGU 스위치 A/S 관련 문의",
        other: "기타 문의",
      }[inquiryType] || inquiryType

    // 프리뷰 환경에서는 실제 이메일 전송을 시뮬레이션
    // 실제 환경에서는 이 부분을 Nodemailer로 대체
    console.log("이메일 전송 시뮬레이션:", {
      to: emailConfig.user,
      subject: `[홈페이지 문의] ${name}님의 ${inquiryTypeText}`,
      content: `이름: ${name}, 연락처: ${phone}, 문의 유형: ${inquiryTypeText}, 문의 내용: ${message.substring(0, 50)}...`,
    })

    // 성공 응답 반환
    return NextResponse.json({
      success: true,
      message: "이메일이 성공적으로 처리되었습니다.",
      messageId: `preview-${Date.now()}`,
      preview: true,
    })
  } catch (error) {
    console.error("이메일 전송 중 오류:", error)

    return NextResponse.json(
      {
        success: false,
        error: "이메일 전송 중 오류가 발생했습니다: " + (error.message || "알 수 없는 오류"),
      },
      { status: 500 },
    )
  } finally {
    console.log("===== 이메일 전송 API 종료 =====")
  }
}
