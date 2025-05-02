import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "간단한 테스트 API가 정상적으로 작동합니다.",
    timestamp: new Date().toISOString(),
  })
}
