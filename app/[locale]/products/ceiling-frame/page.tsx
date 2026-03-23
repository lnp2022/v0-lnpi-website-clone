"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { useState, use } from "react" // ✅ use를 추가했습니다.

export default function CeilingFramePage({
  params,
}: {
  params: Promise<{ locale: string }> // ✅ Promise 타입으로 수정했습니다.
}) {
  // ✅ 아래 한 줄로 locale을 안전하게 가져옵니다.
  const { locale } = use(params)
  const t = useTranslations(locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 우물천장 프레임 서브 카테고리 (핫템뷰님 원본 데이터 100% 유지)
  const categories = [
    { id: "all", name: t.allCategories || "전체 우물" },
    { id: "seagull-single", name: t.ceilingFrameType3 || "한방 우물 갈매기 몰딩용 프레임" },
    { id: "standard-single", name: t.ceilingFrameType2 || "한방 우물 일반(직각)몰딩 프레임" },
    { id: "sheet-wrapping", name: t.ceilingFrameType1 || "일반 시트지 래핑 프레임" },
    { id: "accessories", name: t.accessories || "액세서리 및 마감재" },
  ]

  // 제품 데이터 (8개 제품 모두 100% 그대로 보존)
  const products = [
    {
      id: 1,
      name:
        locale === "ko"
          ? "한방 우물 갈매기 몰딩용 프레임 (53mm x 56mm)"
          : locale === "en"
            ? "Seagull Type Single Ceiling Frame (53mm x 56mm)"
            : locale === "vi"
              ? "Khung trần đơn kiểu hải âu (53mm x 56mm)"
              : locale === "th"
                ? "เฟรมเพดานเดี่ยวแบบนกนางนวล (53mm x 56mm)"
                : "海鸥型单体天花板框架 (53mm x 56mm)",
      category: "seagull-single",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002%20%282%29-znH45SbsAG11QvolEu8nfGeZVCfRYo.png",
    },
    {
      id: 2,
      name:
        locale === "ko"
          ? "한방 우물 일반(직각)몰딩 프레임 (53mm x 56mm)"
          : locale === "en"
            ? "Standard Single Ceiling Frame (53mm x 56mm)"
            : locale === "vi"
              ? "Khung trần đơn tiêu chuẩn (53mm x 56mm)"
              : locale === "th"
                ? "เฟรมเพดานเดี่ยวมาตรฐาน (53mm x 56mm)"
                : "标准单体天花板框架 (53mm x 56mm)",
      category: "standard-single",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/007-TdNLGzQB16RKgKCuRhrqGNKdPtaA29.png",
    },
    {
      id: 3,
      name:
        locale === "ko"
          ? "일반 시트지 래핑 프레임 (43mm x 50mm)"
          : locale === "en"
            ? "Sheet Wrapping Ceiling Frame (43mm x 50mm)"
            : locale === "vi"
              ? "Khung trần bọc tấm (43mm x 50mm)"
              : locale === "th"
                ? "เฟรมเพดานห่อแผ่น (43mm x 50mm)"
                : "贴膜天花板框架 (43mm x 50mm)",
      category: "sheet-wrapping",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wrapping-frame-1-UpAlGHxzTb4UG2wddZivUmrWtJlXJD.png",
    },
    {
      id: 4,
      name:
        locale === "ko"
          ? "한방 프레임 롤 커버 (50미터)"
          : locale === "en"
            ? "Single Frame Roll Cover (50 meters)"
            : locale === "vi"
              ? "Lớp phủ cuộn khung đơn (50 mét)"
              : locale === "th"
                ? "ฝาครอบม้วนเฟรมเดี่ยว (50 เมตร)"
                : "单体框架卷盖 (50米)",
      category: "accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/004-42NLqeiXXmeP6yduQtkQHQv0qW7Qqk.png",
    },
    {
      id: 5,
      name:
        locale === "ko"
          ? "한방 라운드 코너 마감재 (200mm x 200mm)"
          : locale === "en"
            ? "Single Frame Round Corner Finishing (200mm x 200mm)"
            : locale === "vi"
              ? "Vật liệu hoàn thiện góc tròn khung đơn (200mm x 200mm)"
              : locale === "th"
                ? "วัสดุตกแต่งมุมโค้งเฟรมเดี่ยว (200mm x 200mm)"
                : "单体框架圆角装饰材料 (200mm x 200mm)",
      category: "accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/005-kEOVMphin4pjhtMzgU0euqDD5SZy3i.png",
    },
    {
      id: 6,
      name:
        locale === "ko"
          ? "일반 시트지 래핑 라운드 코너 마감재 (150mm x 150mm)"
          : locale === "en"
            ? "Sheet Wrapping Round Corner Finishing (150mm x 150mm)"
            : locale === "vi"
              ? "Vật liệu hoàn thiện góc tròn khung bọc tấm (150mm x 150mm)"
              : locale === "th"
                ? "วัสดุตกแต่งมุมโค้งเฟรมห่อแผ่น (150mm x 150mm)"
                : "贴膜圆角装饰材料 (150mm x 150mm)",
      category: "accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/006-48EhDy4fUvM7blyu6N1UAJd03kYnDN.png",
    },
    {
      id: 7,
      name:
        locale === "ko"
          ? "일반 시트지 래핑 직각 코너 마감재 (100mm x 100mm)"
          : locale === "en"
            ? "Sheet Wrapping Square Corner Finishing (100mm x 100mm)"
            : locale === "vi"
              ? "Vật liệu hoàn thiện góc vuông khung bọc tấm (100mm x 100mm)"
              : locale === "th"
                ? "วัสดุตกแต่งมุมฉากเฟรมห่อแผ่น (100mm x 100mm)"
                : "贴膜直角装饰材料 (100mm x 100mm)",
      category: "accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/007-iZ3FPte2ZdtiwyHb67jNNts18mTNnY.png",
    },
    {
      id: 8,
      name:
        locale === "ko"
          ? "일반 시트지 래핑 중간 마감재 (100mm)"
          : locale === "en"
            ? "Sheet Wrapping Middle Finishing (100mm)"
            : locale === "vi"
              ? "Vật liệu hoàn thiện giữa khung bọc tấm (100mm)"
              : locale === "th"
                ? "วัสดุตกแต่งตรงกลางเฟรมห่อแผ่น (100mm)"
                : "贴膜中间装饰材料 (100mm)",
      category: "accessories",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/008-vJ8dQc0KE6KZfdT9vxFesS3nffKLH5.png",
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex flex-col">
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/${locale}/products/ceiling-frame/${product.id}`}>
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