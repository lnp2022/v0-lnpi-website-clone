import { NextResponse } from "next/server"

// 실제 구현에서는 데이터베이스 연결 및 파일 스토리지 연결 필요
export async function POST(request: Request) {
  try {
    // 요청에서 FormData 추출
    const formData = await request.formData()

    // FormData에서 필요한 데이터 추출
    const title = formData.get("title") as string
    const category = formData.get("category") as string
    const description = formData.get("description") as string
    const file = formData.get("file") as File

    // 필수 필드 검증
    if (!title || !category || !file) {
      return NextResponse.json({ error: "필수 필드가 누락되었습니다." }, { status: 400 })
    }

    // 파일 크기 검증 (50MB 제한)
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "파일 크기는 50MB를 초과할 수 없습니다." }, { status: 400 })
    }

    // 파일 형식 검증
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/zip",
    ]

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "지원되지 않는 파일 형식입니다." }, { status: 400 })
    }

    // 실제 구현에서는 여기에 파일 업로드 및 데이터베이스 저장 로직 추가
    // 예: Vercel Blob Storage에 파일 업로드 및 데이터베이스에 메타데이터 저장

    // 성공 응답
    return NextResponse.json({
      success: true,
      message: "자료가 성공적으로 업로드되었습니다.",
      data: {
        title,
        category,
        description,
        fileName: file.name,
        fileSize: file.size,
        uploadDate: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("자료 업로드 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 업로드 중 오류가 발생했습니다." }, { status: 500 })
  }
}

// 자료 목록 조회 API (GET)
export async function GET() {
  try {
    // 실제 구현에서는 데이터베이스에서 자료 목록 조회
    // 임시 데이터 반환
    const resources = [
      {
        id: 1,
        title: "GUGU 무선 스위치 카탈로그",
        category: "카탈로그",
        description: "GUGU 무선 스위치의 모든 제품 라인업과 상세 사양을 소개하는 카탈로그입니다.",
        fileName: "GUGU_무선스위치_카탈로그.pdf",
        fileSize: 2621440, // 2.5MB
        fileUrl: "/files/GUGU_무선스위치_카탈로그.pdf",
        uploadDate: "2025-04-23T00:00:00.000Z",
        downloadCount: 128,
      },
      {
        id: 2,
        title: "우물천장 프레임 시공 가이드",
        category: "설치 가이드",
        description: "우물천장 프레임의 설치 방법을 단계별로 상세히 설명하는 시공 가이드입니다.",
        fileName: "우물천장_프레임_시공_가이드.pdf",
        fileSize: 3355443, // 3.2MB
        fileUrl: "/files/우물천장_프레임_시공_가이드.pdf",
        uploadDate: "2025-04-20T00:00:00.000Z",
        downloadCount: 95,
      },
    ]

    return NextResponse.json({ resources })
  } catch (error) {
    console.error("자료 목록 조회 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 목록 조회 중 오류가 발생했습니다." }, { status: 500 })
  }
}
