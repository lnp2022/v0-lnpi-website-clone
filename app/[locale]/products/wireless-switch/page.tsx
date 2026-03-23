"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { useState, use } from "react" // ✅ use를 추가했습니다.

export default function WirelessSwitchPage({
  params,
}: {
  params: Promise<{ locale: string }> // ✅ Promise 타입으로 수정했습니다.
}) {
  // ✅ 아래 한 줄로 locale을 안전하게 가져오며, 다른 데이터는 전혀 건드리지 않습니다.
  const { locale } = use(params)
  const t = useTranslations(locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 무선 스위치 서브 카테고리 (핫템뷰님 원본 데이터 100% 유지)
  const categories = [
    {
      id: "all",
      name:
        locale === "ko"
          ? "전체 제품"
          : locale === "en"
            ? "All Products"
            : locale === "vi"
              ? "Tất cả sản phẩm"
              : locale === "th"
                ? "สินค้าทั้งหมด"
                : "所有产品",
    },
    {
      id: "app-type",
      name:
        locale === "ko"
          ? "앱 지원 타입"
          : locale === "en"
            ? "App Support Type"
            : locale === "vi"
              ? "Loại hỗ trợ ứng dụng"
              : locale === "th"
                ? "แบบรองรับแอป"
                : "应用支持型",
    },
    {
      id: "standard-type",
      name:
        locale === "ko"
          ? "일반 타입"
          : locale === "en"
            ? "Standard Type"
            : locale === "vi"
              ? "Loại tiêu chuẩn"
              : locale === "th"
                ? "แบบมาตรฐาน"
                : "标准型",
    },
  ]

  // 제품 데이터 (핫템뷰님 원본 데이터 100% 유지)
  const products = [
    {
      id: 1,
      name:
        locale === "ko"
          ? "GUGU 스마트 무선 터치 스위치 (앱 지원 타입)"
          : locale === "en"
            ? "GUGU Smart Wireless Touch Switch (App Support Type)"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây thông minh GUGU (Loại hỗ trợ ứng dụng)"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU (แบบรองรับแอป)"
                : "GUGU智能无线触摸开关（应用支持型）",
      description:
        locale === "ko"
          ? "스마트폰 앱으로 제어 가능한 고급형 무선 스위치"
          : locale === "en"
            ? "Premium wireless switch that can be controlled via smartphone app"
            : locale === "vi"
              ? "Công tắc không dây cao cấp có thể điều khiển qua ứng dụng điện thoại thông minh"
              : locale === "th"
                ? "สวิตช์ไร้สายระดับพรีเมียมที่สามารถควบคุมผ่านแอปสมาร์ทโฟน"
                : "可通过智能手机应用控制的高级无线开关",
      category: "app-type",
      image: "/images/wireless-switch/001.png",
      link: `/${locale}/products/wireless-switch/type2`,
    },
    {
      id: 2,
      name:
        locale === "ko"
          ? "GUGU 스마트 무선 터치 스위치 (일반 타입)"
          : locale === "en"
            ? "GUGU Smart Wireless Touch Switch (Standard Type)"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây thông minh GUGU (Loại tiêu chuẩn)"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU (แบบมาตรฐาน)"
                : "GUGU智能无线触摸开关（标准型）",
      description:
        locale === "ko"
          ? "간편한 설치와 사용이 가능한 기본형 무선 스위치"
          : locale === "en"
            ? "Basic wireless switch with easy installation and use"
            : locale === "vi"
              ? "Công tắc không dây cơ bản với cài đặt và sử dụng dễ dàng"
              : locale === "th"
                ? "สวิตช์ไร้สายพื้นฐานที่ติดตั้งและใช้งานง่าย"
                : "安装和使用简便的基本型无线开关",
      category: "standard-type",
      image: "/images/wireless-switch/002.png",
      link: `/${locale}/products/wireless-switch/type1`,
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
          alt={
            locale === "ko"
              ? "GUGU 무선 스위치"
              : locale === "en"
                ? "GUGU Wireless Switch"
                : locale === "vi"
                  ? "Công tắc không dây GUGU"
                  : locale === "th"
                    ? "สวิตช์ไร้สาย GUGU"
                    : "GUGU无线开关"
          }
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