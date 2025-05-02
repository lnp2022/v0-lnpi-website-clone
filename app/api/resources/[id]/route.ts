import { NextResponse } from "next/server"

// 특정 자료 조회 API (GET)
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // 실제 구현에서는 데이터베이스에서 해당 ID의 자료 조회
    // 임시 데이터 반환
    const resources = [
      {
        id: 1,
        title: "GUGU 무선 스위치 카탈로그",
        category: "카탈로그",
        description:
          "GUGU 무선 스위치의 모든 제품 라인업과 상세 사양을 소개하는 카탈로그입니다. 제품 특징, 설치 방법, 기술 사양 등 상세한 정보를 제공합니다.",
        fileName: "GUGU_무선스위치_카탈로그.pdf",
        fileSize: 2621440, // 2.5MB
        fileUrl: "/files/GUGU_무선스위치_카탈로그.pdf",
        uploadDate: "2025-04-23T00:00:00.000Z",
        downloadCount: 128,
        relatedResources: [3, 5],
      },
      {
        id: 2,
        title: "우물천장 프레임 시공 가이드",
        category: "설치 가이드",
        description:
          "우물천장 프레임의 설치 방법을 단계별로 상세히 설명하는 시공 가이드입니다. 필요한 도구, 설치 시 주의사항, 문제 해결 방법 등을 포함합니다.",
        fileName: "우물천장_프레임_시공_가이드.pdf",
        fileSize: 3355443, // 3.2MB
        fileUrl: "/files/우물천장_프레임_시공_가이드.pdf",
        uploadDate: "2025-04-20T00:00:00.000Z",
        downloadCount: 95,
        relatedResources: [4],
      },
    ]

    const resource = resources.find((r) => r.id === id)

    if (!resource) {
      return NextResponse.json({ error: "해당 자료를 찾을 수 없습니다." }, { status: 404 })
    }

    return NextResponse.json({ resource })
  } catch (error) {
    console.error("자료 조회 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 조회 중 오류가 발생했습니다." }, { status: 500 })
  }
}

// 자료 수정 API (PUT)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const formData = await request.formData()

    // 실제 구현에서는 데이터베이스에서 해당 ID의 자료 수정

    return NextResponse.json({
      success: true,
      message: "자료가 성공적으로 수정되었습니다.",
    })
  } catch (error) {
    console.error("자료 수정 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 수정 중 오류가 발생했습니다." }, { status: 500 })
  }
}

// 자료 삭제 API (DELETE)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    // 실제 구현에서는 데이터베이스에서 해당 ID의 자료 삭제
    // 파일 스토리지에서도 파일 삭제

    return NextResponse.json({
      success: true,
      message: "자료가 성공적으로 삭제되었습니다.",
    })
  } catch (error) {
    console.error("자료 삭제 중 오류 발생:", error)
    return NextResponse.json({ error: "자료 삭제 중 오류가 발생했습니다." }, { status: 500 })
  }
}
