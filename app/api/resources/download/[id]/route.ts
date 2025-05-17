import { NextResponse } from "next/server"

// 자료 다운로드 API
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // 실제 구현에서는 데이터베이스에서 해당 ID의 자료 조회
    // 임시 데이터
    const resources = [
      {
        id: 1,
        title: "GUGU 무선 스위치 카탈로그",
        fileName: "GUGU_무선스위치_카탈로그.pdf",
        fileUrl: "/files/GUGU_무선스위치_카탈로그.pdf",
      },
      {
        id: 2,
        title: "우물천장 프레임 시공 가이드",
        fileName: "우물천장_프레임_시공_가이드.pdf",
        fileUrl: "/files/우물천장_프레임_시공_가이드.pdf",
      },
    ]

    const resource = resources.find((r) => r.id === id)

    if (!resource) {
      return NextResponse.json({ error: "해당 자료를 찾을 수 없습니다." }, { status: 404 })
    }

    // 실제 구현에서는 파일 스토리지에서 파일 가져오기
    // 다운로드 카운트 증가 로직 추가

    // 파일 URL 반환
    return NextResponse.json({
      success: true,
      fileUrl: resource.fileUrl,
      fileName: resource.fileName,
    })
  } catch (error) {
    console.error("자료 다운로드 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 다운로드 중 오류가 발생했습니다." }, { status: 500 })
  }
}
