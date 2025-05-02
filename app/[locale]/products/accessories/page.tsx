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
    { id: "all", name: t.allAccessories },
    { id: "3m-tape", name: t.threeMTape },
    { id: "cushion-tape", name: t.blackCushionTape },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name: t.threeMTapeProduct,
      description: t.threeMTapeDescription,
      category: "3m-tape",
      image: "/images/accessories/001.png",
      features: [t.threeMTapeFeature1, t.threeMTapeFeature2, t.threeMTapeFeature3, t.threeMTapeFeature4],
    },
    {
      id: 2,
      name: t.blackCushionTapeProduct,
      description: t.blackCushionTapeDescription,
      category: "cushion-tape",
      image: "/images/accessories/002.png",
      features: [
        t.blackCushionTapeFeature1,
        t.blackCushionTapeFeature2,
        t.blackCushionTapeFeature3,
        t.blackCushionTapeFeature4,
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
        <Image src="/images/accessories/main.png" alt={t.accessories} fill className="object-contain" />
      </div>

      {/* 설명글 */}
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-gray-700 italic">{t.accessoriesNote}</p>
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
                  <h4 className="font-semibold mb-2">{t.keyFeatures}:</h4>
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
          <h2 className="text-3xl font-bold mb-6 text-center">{t.accessoriesIntro}</h2>
          <div className="prose max-w-none">
            <p className="mb-4">{t.accessoriesIntroP1}</p>
            <p className="mb-4">{t.accessoriesIntroP2}</p>
            <p>{t.accessoriesIntroP3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
