import { NextResponse } from "next/server"
import nodemailer from "nodemailer" // 🌟 1. 진짜 발송 도구 추가!

export const runtime = "nodejs"

export async function POST(request: Request) {
  console.log("===== [실전] 이메일 발송 API 시작 =====")

  try {
    const body = await request.json()
    const { name, phone, inquiryType, message } = body

    // 필수 필드 검증
    if (!name || !phone || !inquiryType || !message) {
      return NextResponse.json({ success: false, error: "필수 필드가 누락되었습니다." }, { status: 400 })
    }

    // 🌟 2. 진짜 이메일 전송 엔진(Transporter) 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "2022landp@gmail.com", 
        // 보안을 위해 Vercel 환경변수 사용을 권장하지만, 일단 현재 쓰시는 앱 비밀번호를 기본값으로 넣었습니다.
        pass: process.env.EMAIL_PASS || "ygbcprgbuygctjsi", 
      },
    })

    // 🌟 3. 문의 유형 텍스트 매핑 (새로 추가하신 항목들 반영!)
    const inquiryTypeMap: Record<string, string> = {
      all: "(주)엘엔피 전체 상품 구매 문의",
      ceiling: "우물천장 프레임 구매 문의",
      switch: "GUGU 무선 스위치 구매 문의",
      guguservice: "GUGU 무선 스위치 A/S 문의",
      purchase: "GUGU 올인원 스위치 구매 문의", // ✅ 핫템뷰님 추가 항목
      allinoneservice: "GUGU 올인원 스위치 A/S 문의", // ✅ 핫템뷰님 추가 항목
      other: "기타 문의",
    }
    const inquiryTypeText = inquiryTypeMap[inquiryType] || inquiryType

    // 🌟 4. 실제 메일 내용 구성
    const mailOptions = {
      from: `"엘엔피 홈페이지" <2022landp@gmail.com>`,
      to: "2022landp@gmail.com", // 📥 고객 문의를 실제로 받아볼 메일 주소
      subject: `[홈페이지 문의] ${name}님의 ${inquiryTypeText}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">새로운 홈페이지 문의 접수</h2>
          <p style="margin-top: 20px;"><strong>성함/회사명:</strong> ${name}</p>
          <p><strong>연락처:</strong> ${phone}</p>
          <p><strong>문의 유형:</strong> ${inquiryTypeText}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 10px;">[문의 내용]</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 30px;">* 본 메일은 (주)엘엔피 공식 홈페이지에서 자동 발송되었습니다.</p>
        </div>
      `,
    }

    // 🌟 5. 진짜로 메일 쏘기!
    await transporter.sendMail(mailOptions)
    console.log("✅ 메일 발송 성공!")

    return NextResponse.json({
      success: true,
      message: "이메일이 성공적으로 전송되었습니다.",
    })

  } catch (error: any) {
    console.error("❌ 이메일 전송 에러 발생:", error)
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