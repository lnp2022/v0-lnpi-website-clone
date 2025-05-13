"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WirelessSwitchPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 무선 스위치 서브 카테고리
  const categories = [
    { id: "all", name: "전체 제품" },
    { id: "app-type", name: "앱 지원 타입" },
    { id: "standard-type", name: "일반 타입" },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name: "GUGU 스마트 무선 터치 스위치 (앱 지원 타입)",
      description: "스마트폰 앱으로 제어 가능한 고급형 무선 스위치",
      category: "app-type",
      image: "/images/wireless-switch/001.png",
      link: `/${params.locale}/products/wireless-switch/type2`,
    },
    {
      id: 2,
      name: "GUGU 스마트 무선 터치 스위치 (일반 타입)",
      description: "간편한 설치와 사용이 가능한 기본형 무선 스위치",
      category: "standard-type",
      image: "/images/wireless-switch/002.png",
      link: `/${params.locale}/products/wireless-switch/type1`,
    },
  ]

  // 현재 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* 히어로 배너 */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-white">
        <Image
          src="/images/wireless-switch/main.png"
          alt="GUGU 무선 스위치"
          fill
          className="object-contain"
          priority
          quality={100}
        />
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
            <Link key={product.id} href={product.link} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full bg-gray-50">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
