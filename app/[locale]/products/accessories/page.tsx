"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AccessoriesPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 기타 자재 서브 카테고리
  const categories = [
    { id: "all", name: "전체 제품" },
    { id: "3m-tape", name: "3M 양면 테이프" },
    { id: "cushion-tape", name: "블랙 쿠션 테이프" },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name: "3M 양면 테이프 - (1롤-20미터)",
      description: "우물천장 프레임 시공에 최적화된 고강도 양면 테이프",
      category: "3m-tape",
      image: "/images/accessories/001.png",
      features: [
        "강력한 접착력으로 안정적인 시공 가능",
        "다양한 표면에 사용 가능",
        "내구성이 뛰어나 오랜 시간 유지",
        "시공이 간편하고 빠름",
      ],
    },
    {
      id: 2,
      name: "블랙 쿠션 테이프 - (1롤-30미터)",
      description: "마감재와 프레임 사이 간격을 메우는 특수 쿠션 테이프",
      category: "cushion-tape",
      image: "/images/accessories/002.png",
      features: [
        "빛 샘 방지 효과",
        "다양한 표면에 사용 가능",
        "내열성이 우수하여 LED 조명에 적합",
        "쉽게 잘리고 부착이 간편함",
      ],
    },
  ]

  // 현재 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* 히어로 배너 */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/images/accessories/main.png" alt="기타 자재" fill className="object-contain" />
      </div>

      {/* 설명글 */}
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-gray-700 italic">
          3M 양면 테이프 & 블랙 쿠션 테이프는 선택 사항 입니다. 고객님의 시공 방법에 따라 강력 접착재 또는 실리콘 처리
          등으로 대체 가능 합니다.
        </p>
      </div>

      {/* 서브 카테고리 네비게이션 */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-sm md:text-base px-1 py-2 border-b-2 transition-colors ${
                  activeCategory === category.id
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 제품 그리드 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
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
      </div>

      {/* 제품 설명 섹션 */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">기타 자재 소개</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              주식회사 엘엔피는 우물천장 프레임과 무선 스위치 외에도 시공에 필요한 다양한 기타 자재를 제공하고 있습니다.
              고품질의 3M 양면 테이프와 블랙 쿠션 테이프는 우물천장 프레임 시공의 완성도를 높이는 필수 자재입니다.
            </p>
            <p className="mb-4">
              3M 양면 테이프는 강력한 접착력으로 마감재를 천장에 안정적으로 고정시켜 주며, 블랙 쿠션 테이프는 마감재와
              프레임 사이의 간격을 메워 빛 샘을 방지하고 깔끔한 마감을 가능하게 합니다.
            </p>
            <p>
              모든 자재는 엄격한 품질 관리를 통해 선별된 제품으로, 시공의 편의성과 내구성을 모두 고려하여
              선정되었습니다. 자재에 대한 자세한 정보나 구매 문의는 문의하기 버튼을 통해 연락 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
