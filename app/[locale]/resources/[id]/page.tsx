"use client"

import { useTranslations } from "@/lib/translations"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Calendar, FileText, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ResourceDetailPage({
  params,
}: {
  params: { locale: string; id: string }
}) {
  const t = useTranslations(params.locale)
  const resourceId = Number.parseInt(params.id)
  const [isDownloading, setIsDownloading] = useState(false)

  // 자료실 데이터 (실제로는 API나 데이터베이스에서 가져올 것)
  const resources = [
    {
      id: 1,
      title: "GUGU 무선 스위치 카탈로그",
      category: "카탈로그",
      date: "2025-04-23",
      fileSize: "2.5MB",
      downloadCount: 128,
      fileUrl: "/files/GUGU_무선스위치_카탈로그.pdf",
      description:
        "GUGU 무선 스위치의 모든 제품 라인업과 상세 사양을 소개하는 카탈로그입니다. 제품 특징, 설치 방법, 기술 사양 등 상세한 정보를 제공합니다.",
      relatedResources: [3, 5],
    },
    {
      id: 2,
      title: "우물천장 프레임 시공 가이드",
      category: "설치 가이드",
      date: "2025-04-20",
      fileSize: "3.2MB",
      downloadCount: 95,
      fileUrl: "/files/우물천장_프레임_시공_가이드.pdf",
      description:
        "우물천장 프레임의 설치 방법을 단계별로 상세히 설명하는 시공 가이드입니다. 필요한 도구, 설치 시 주의사항, 문제 해결 방법 등을 포함합니다.",
      relatedResources: [4],
    },
    {
      id: 3,
      title: "GUGU 무선 스위치 앱 사용 설명서",
      category: "사용 설명서",
      date: "2025-04-15",
      fileSize: "1.8MB",
      downloadCount: 76,
      fileUrl: "/files/GUGU_무선스위치_앱_사용_설명서.pdf",
      description:
        "GUGU 무선 스위치 앱의 설치 방법부터 고급 기능까지 상세히 설명하는 사용 설명서입니다. 앱 설정, 스위치 연결, 문제 해결 방법 등을 포함합니다.",
      relatedResources: [1, 5],
    },
    {
      id: 4,
      title: "우물천장 프레임 카탈로그",
      category: "카탈로그",
      date: "2025-04-10",
      fileSize: "4.1MB",
      downloadCount: 112,
      fileUrl: "/files/우물천장_프레임_카탈로그.pdf",
      description:
        "우물천장 프레임의 모든 제품 라인업과 상세 사양을 소개하는 카탈로그입니다. 제품 특징, 설치 방법, 기술 사양 등 상세한 정보를 제공합니다.",
      relatedResources: [2],
    },
    {
      id: 5,
      title: "GUGU 무선 스위치 설치 가이드",
      category: "설치 가이드",
      date: "2025-04-05",
      fileSize: "2.3MB",
      downloadCount: 89,
      fileUrl: "/files/GUGU_무선스위치_설치_가이드.pdf",
      description:
        "GUGU 무선 스위치의 설치 방법을 단계별로 상세히 설명하는 설치 가이드입니다. 필요한 도구, 설치 시 주의사항, 문제 해결 방법 등을 포함합니다.",
      relatedResources: [1, 3],
    },
    {
      id: 6,
      title: "기타 자재 제품 안내서",
      category: "제품 안내",
      date: "2025-04-01",
      fileSize: "1.5MB",
      downloadCount: 64,
      fileUrl: "/files/기타_자재_제품_안내서.pdf",
      description:
        "우물천장 프레임과 무선 스위치 설치에 필요한 기타 자재에 대한 안내서입니다. 각 자재의 용도, 사양, 사용 방법 등을 설명합니다.",
      relatedResources: [2, 4],
    },
  ]

  const resource = resources.find((r) => r.id === resourceId)
  const relatedResources = resource ? resources.filter((r) => resource.relatedResources.includes(r.id)) : []

  // 파일 다운로드 처리
  const handleDownload = () => {
    if (!resource) return

    setIsDownloading(true)

    try {
      // 실제 구현에서는 파일 다운로드 로직 추가
      // 예시: 서버에서 파일을 가져와 다운로드하거나, 파일 URL을 직접 열기
      window.open(resource.fileUrl, "_blank")

      // 다운로드 카운트 증가 로직 (실제 구현 시 서버에 요청)
      console.log(`${resource.title} 다운로드 카운트 증가`)
    } catch (error) {
      console.error("파일 다운로드 중 오류 발생:", error)
      alert("파일 다운로드 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsDownloading(false)
    }
  }

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">자료를 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-8">요청하신 자료가 존재하지 않거나 삭제되었습니다.</p>
        <Link href={`/${params.locale}/resources`}>
          <Button className="bg-orange-500 hover:bg-orange-600">자료실로 돌아가기</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${params.locale}/resources`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          자료실로 돌아가기
        </Button>
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* 자료 헤더 */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">{resource.category}</span>
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {resource.date}
            </span>
            <span className="flex items-center">
              <Eye size={14} className="mr-1" />
              다운로드 {resource.downloadCount}회
            </span>
          </div>
          <h1 className="text-2xl font-bold">{resource.title}</h1>
        </div>

        {/* 자료 내용 */}
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">자료 설명</h2>
            <p className="text-gray-700">{resource.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">파일 정보</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">파일 크기:</span>
                <span className="text-gray-700">{resource.fileSize}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">등록일:</span>
                <span className="text-gray-700">{resource.date}</span>
              </div>
            </div>
          </div>

          {/* 다운로드 버튼 */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? "다운로드 중..." : "파일 다운로드"}
            </Button>
          </div>

          {/* 관련 자료 */}
          {relatedResources.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">관련 자료</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedResources.map((related) => (
                  <Link key={related.id} href={`/${params.locale}/resources/${related.id}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <FileText className="h-10 w-10 text-orange-500 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium">{related.title}</h3>
                            <p className="text-sm text-gray-500">
                              {related.category} | {related.date}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
