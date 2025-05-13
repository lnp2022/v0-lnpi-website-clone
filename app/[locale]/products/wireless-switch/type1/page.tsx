"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StandardWirelessSwitchPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [isDownloading, setIsDownloading] = useState(false)

  // 구글 드라이브 PDF 파일 URL
  const koreanCatalogUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/view?usp=sharing"
  const englishCatalogUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/view?usp=sharing"
  // iframe에서 사용할 임베딩 URL
  const koreanCatalogEmbedUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/preview"
  const englishCatalogEmbedUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/preview"

  // 일반 타입 무선 스위치 제품 데이터
  const products = [
    {
      id: 1,
      name: "GUGU 일반 무선 터치 스위치 6채널",
      description: "6개의 독립적인 채널을 제공하는 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001-DIALUXbgc5KkkhqAKtXm1t7kCqcVeS.png",
      features: ["6채널 독립 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
    {
      id: 2,
      name: "GUGU 일반 무선 터치 스위치 5채널",
      description: "5개의 독립적인 채널을 제공하는 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002-Xjs1c4VEPRQsqpCAj4keLIH56KbJt9.png",
      features: ["5채널 독립 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
    {
      id: 3,
      name: "GUGU 일반 무선 터치 스위치 4채널",
      description: "4개의 독립적인 채널을 제공하는 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/003-qdmNeHYLUOlHNucGOqHbzRLSttyH2r.png",
      features: ["4채널 독립 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
    {
      id: 4,
      name: "GUGU 일반 무선 터치 스위치 3채널",
      description: "3개의 독립적인 채널을 제공하는 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/004-4Ki6VGu2rxfzhYuQ2pD6nX1pAvzy2j.png",
      features: ["3채널 독립 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
    {
      id: 5,
      name: "GUGU 일반 무선 터치 스위치 2채널",
      description: "2개의 독립적인 채널을 제공하는 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/005-1mHh7UO7x7zc6YSkwkrXxBjiR8LNmC.png",
      features: ["2채널 독립 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
    {
      id: 6,
      name: "GUGU 일반 무선 터치 스위치 1채널",
      description: "1개의 채널을 제공하는 심플한 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/006-JadHl2SunceNfFKHscbC8V1bsYeppK.png",
      features: ["1채널 제어", "간편한 설치", "배터리 교체 용이", "고급 터치 감도"],
    },
  ]

  // 카탈로그 다운로드 함수
  const handleDownload = (url: string, fileName: string) => {
    // 새 창에서 PDF 열기
    window.open(url, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${params.locale}/products/wireless-switch`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-center">GUGU 스마트 무선 터치 스위치</h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">일반 타입 (앱 미지원 타입)</h2>

      {/* 제품 정보 이미지 */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/images/wireless-switch/product-info-wide.png"
                alt="GUGU 무선 스위치 제품 정보"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          GUGU 스마트 무선 터치 스위치 일반 타입은 간편한 설치와 사용이 특징인 제품입니다.
          <br />
          별도의 앱 설치 없이 스위치만으로 조명을 제어할 수 있어 사용이 간편합니다.
          <br />
          1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.
        </p>
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64 w-full bg-gray-50">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div>
                <h4 className="font-semibold mb-2">주요 특징:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link href={`/${params.locale}/consultation?product=${encodeURIComponent(product.name)}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">{t.inquire}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 제품 특징 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">제품 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">간편한 설치</h3>
            <p className="text-gray-700">
              기존 스위치 위치에 쉽게 설치할 수 있으며, 별도의 배선 공사가 필요 없어 설치 비용과 시간을 절약할 수
              있습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">다양한 채널 옵션</h3>
            <p className="text-gray-700">
              1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">고급 터치 감도</h3>
            <p className="text-gray-700">
              정밀한 터치 감도로 가벼운 터치만으로도 작동하며, 오작동을 방지하는 기술이 적용되었습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">배터리 교체 용이</h3>
            <p className="text-gray-700">
              배터리 교체가 간편하며, 저전력 설계로 배터리 수명이 길어 유지 관리가 편리합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 카탈로그 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">제품 카탈로그</h2>
        <p className="text-gray-700 mb-6 text-center">
          GUGU 무선 스위치의 상세 사양과 설치 방법이 포함된 카탈로그를 확인하세요.
        </p>

        <Tabs defaultValue="korean" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="korean">한글 카탈로그</TabsTrigger>
            <TabsTrigger value="english">영문 카탈로그</TabsTrigger>
          </TabsList>

          <TabsContent value="korean" className="border rounded-lg bg-white p-4 mx-auto max-w-[70%]">
            <div className="flex justify-end mb-4">
              <a
                href={koreanCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Download size={16} />
                카탈로그 다운로드
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={`${koreanCatalogEmbedUrl}?dpi=300&quality=high`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "high-quality" }}
              ></iframe>
            </div>
          </TabsContent>

          <TabsContent value="english" className="border rounded-lg bg-white p-4 mx-auto max-w-[70%]">
            <div className="flex justify-end mb-4">
              <a
                href={englishCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Download size={16} />
                카탈로그 다운로드
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={`${englishCatalogEmbedUrl}?dpi=300&quality=high`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "high-quality" }}
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
