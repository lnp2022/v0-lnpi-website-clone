"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CeilingFramePage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 우물천장 프레임 서브 카테고리
  const categories = [
    { id: "all", name: t.allCategories || "전체 우물" },
    { id: "seagull-single", name: t.ceilingFrameType3 || "한방 우물 갈매기 몰딩용 프레임" },
    { id: "standard-single", name: t.ceilingFrameType2 || "한방 우물 일반(직각)몰딩 프레임" },
    { id: "sheet-wrapping", name: t.ceilingFrameType1 || "일반 시트지 래핑 프레임" },
    { id: "accessories", name: t.accessories || "액세서리 및 마감재" },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name:
        params.locale === "ko"
          ? "한방 우물 갈매기 몰딩용 프레임 (53mm x 56mm)"
          : params.locale === "en"
            ? "Seagull Type Single Ceiling Frame (53mm x 56mm)"
            : params.locale === "vi"
              ? "Khung trần đơn kiểu hải âu (53mm x 56mm)"
              : params.locale === "th"
                ? "เฟรมเพดานเดี่ยวแบบนกนางนวล (53mm x 56mm)"
                : "海鸥型单体天花板框架 (53mm x 56mm)",
      category: "seagull-single",
      image: "/images/ceiling-frame/new/1.png",
    },
    {
      id: 2,
      name:
        params.locale === "ko"
          ? "한방 우물 일반(직각)몰딩 프레임 (53mm x 56mm)"
          : params.locale === "en"
            ? "Standard Single Ceiling Frame (53mm x 56mm)"
            : params.locale === "vi"
              ? "Khung trần đơn tiêu chuẩn (53mm x 56mm)"
              : params.locale === "th"
                ? "เฟรมเพดานเดี่ยวมาตรฐาน (53mm x 56mm)"
                : "标准单体天花板框架 (53mm x 56mm)",
      category: "standard-single",
      image: "/images/ceiling-frame/new/2.png",
    },
    {
      id: 3,
      name:
        params.locale === "ko"
          ? "일반 시트지 래핑 프레임 (43mm x 50mm)"
          : params.locale === "en"
            ? "Sheet Wrapping Ceiling Frame (43mm x 50mm)"
            : params.locale === "vi"
              ? "Khung trần bọc tấm (43mm x 50mm)"
              : params.locale === "th"
                ? "เฟรมเพดานห่อแผ่น (43mm x 50mm)"
                : "贴膜天花板框架 (43mm x 50mm)",
      category: "sheet-wrapping",
      image: "/images/ceiling-frame/new/3.png",
    },
    {
      id: 4,
      name:
        params.locale === "ko"
          ? "한방 프레임 롤 커버 (50미터)"
          : params.locale === "en"
            ? "Single Frame Roll Cover (50 meters)"
            : params.locale === "vi"
              ? "Lớp phủ cuộn khung đơn (50 mét)"
              : params.locale === "th"
                ? "ฝาครอบม้วนเฟรมเดี่ยว (50 เมตร)"
                : "单体框架卷盖 (50米)",
      category: "accessories",
      image: "/images/ceiling-frame/new/4.png",
    },
    {
      id: 5,
      name:
        params.locale === "ko"
          ? "한방 라운드 코너 마감재 (200mm x 200mm)"
          : params.locale === "en"
            ? "Single Frame Round Corner Finishing (200mm x 200mm)"
            : params.locale === "vi"
              ? "Vật liệu hoàn thiện góc tròn khung đơn (200mm x 200mm)"
              : params.locale === "th"
                ? "วัสดุตกแต่งมุมโค้งเฟรมเดี่ยว (200mm x 200mm)"
                : "单体框架圆角装饰材料 (200mm x 200mm)",
      category: "accessories",
      image: "/images/ceiling-frame/new/5.png",
    },
    {
      id: 6,
      name:
        params.locale === "ko"
          ? "일반 시트지 래핑 라운드 코너 마감재 (150mm x 150mm)"
          : params.locale === "en"
            ? "Sheet Wrapping Round Corner Finishing (150mm x 150mm)"
            : params.locale === "vi"
              ? "Vật liệu hoàn thiện góc tròn khung bọc tấm (150mm x 150mm)"
              : params.locale === "th"
                ? "วัสดุตกแต่งมุมโค้งเฟรมห่อแผ่น (150mm x 150mm)"
                : "贴膜圆角装饰材料 (150mm x 150mm)",
      category: "accessories",
      image: "/images/ceiling-frame/new/6.png",
    },
    {
      id: 7,
      name:
        params.locale === "ko"
          ? "일반 시트지 래핑 직각 코너 마감재 (100mm x 100mm)"
          : params.locale === "en"
            ? "Sheet Wrapping Square Corner Finishing (100mm x 100mm)"
            : params.locale === "vi"
              ? "Vật liệu hoàn thiện góc vuông khung bọc tấm (100mm x 100mm)"
              : params.locale === "th"
                ? "วัสดุตกแต่งมุมฉากเฟรมห่อแผ่น (100mm x 100mm)"
                : "贴膜直角装饰材料 (100mm x 100mm)",
      category: "accessories",
      image: "/images/ceiling-frame/new/7.png",
    },
    {
      id: 8,
      name:
        params.locale === "ko"
          ? "일반 시트지 래핑 중간 마감재 (100mm)"
          : params.locale === "en"
            ? "Sheet Wrapping Middle Finishing (100mm)"
            : params.locale === "vi"
              ? "Vật liệu hoàn thiện giữa khung bọc tấm (100mm)"
              : params.locale === "th"
                ? "วัสดุตกแต่งตรงกลางเฟรมห่อแผ่น (100mm)"
                : "贴膜中间装饰材料 (100mm)",
      category: "accessories",
      image: "/images/ceiling-frame/new/8.png",
    },
  ]

  // 현재 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* 히어로 배너 */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001%20%282%29-hKFbjY7qE8piGKnOmq5UTkTwN1oPML.png"
          alt={t.ceilingFrame || "우물천장 무드등 프레임"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-light text-white">{t.ceilingFrame || "우물천장 무드등 프레임"}</h1>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/${params.locale}/products/ceiling-frame/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-gray-800 text-center">
                  {product.name.split(" (")[0]}
                  <br />
                  {product.id === 2
                    ? "(53mm x 56mm)"
                    : product.name.includes("(")
                      ? `(${product.name.split("(")[1]}`
                      : ""}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
