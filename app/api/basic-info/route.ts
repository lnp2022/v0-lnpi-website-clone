import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "기본 정보 API가 정상적으로 작동합니다.",
    serverTime: new Date().toISOString(),
    nodeVersion: process.version,
  })
}
