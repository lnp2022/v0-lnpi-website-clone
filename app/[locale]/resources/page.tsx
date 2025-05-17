"use client"

import { useTranslations } from "@/lib/translations"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function ResourcesPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [iframeHeight, setIframeHeight] = useState("800px")
  const [isLoading, setIsLoading] = useState(true)

  // iframe 로딩 완료 처리
  const handleIframeLoad = () => {
    setIsLoading(false)
    // 필요한 경우 iframe 높이 조정 로직 추가
  }

  // 반응형 높이 조정
  useEffect(() => {
    const handleResize = () => {
      // 화면 크기에 따라 iframe 높이 조정
      if (window.innerWidth < 768) {
        setIframeHeight("600px")
      } else {
        setIframeHeight("800px")
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // 초기 로드 시 실행

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">자료실</h1>
      <p className="text-gray-600 mb-8 text-center">
        주식회사 엘엔피의 제품 카탈로그, 설치 가이드 및 사용 설명서를 다운로드할 수 있습니다.
      </p>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          )}

          {/* 아임웹 게시판 iframe */}
          <iframe
            src="https://lightandpeople.imweb.me/QnA"
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            onLoad={handleIframeLoad}
            style={{ display: isLoading ? "none" : "block" }}
            title="LNP 자료실"
            className="w-full"
          ></iframe>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-500">
        * 자료실은 아임웹 서비스를 통해 제공됩니다. 로그인이 필요한 경우 아임웹 계정으로 로그인해주세요.
      </div>
    </div>
  )
}
