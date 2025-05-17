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
    {
      id: "all",
      name:
        params.locale === "ko"
          ? "전체 제품"
          : params.locale === "en"
            ? "All Products"
            : params.locale === "vi"
              ? "Tất cả sản phẩm"
              : params.locale === "th"
                ? "สินค้าทั้งหมด"
                : "所有产品",
    },
    {
      id: "app-type",
      name:
        params.locale === "ko"
          ? "앱 지원 타입"
          : params.locale === "en"
            ? "App Support Type"
            : params.locale === "vi"
              ? "Loại hỗ trợ ứng dụng"
              : params.locale === "th"
                ? "แบบรองรับแอป"
                : "应用支持型",
    },
    {
      id: "standard-type",
      name:
        params.locale === "ko"
          ? "일반 타입"
          : params.locale === "en"
            ? "Standard Type"
            : params.locale === "vi"
              ? "Loại tiêu chuẩn"
              : params.locale === "th"
                ? "แบบมาตรฐาน"
                : "标准型",
    },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name:
        params.locale === "ko"
          ? "GUGU 스마트 무선 터치 스위치 (앱 지원 타입)"
          : params.locale === "en"
            ? "GUGU Smart Wireless Touch Switch (App Support Type)"
            : params.locale === "vi"
              ? "Công tắc cảm ứng không dây thông minh GUGU (Loại hỗ trợ ứng dụng)"
              : params.locale === "th"
                ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU (แบบรองรับแอป)"
                : "GUGU智能无线触摸开关（应用支持型）",
      description:
        params.locale === "ko"
          ? "스마트폰 앱으로 제어 가능한 고급형 무선 스위치"
          : params.locale === "en"
            ? "Premium wireless switch that can be controlled via smartphone app"
            : params.locale === "vi"
              ? "Công tắc không dây cao cấp có thể điều khiển qua ứng dụng điện thoại thông minh"
              : params.locale === "th"
                ? "สวิตช์ไร้สายระดับพรีเมียมที่สามารถควบคุมผ่านแอปสมาร์ทโฟน"
                : "可通过智能手机应用控制的高级无线开关",
      category: "app-type",
      image: "/images/wireless-switch/001.png",
      link: `/${params.locale}/products/wireless-switch/type2`,
    },
    {
      id: 2,
      name:
        params.locale === "ko"
          ? "GUGU 스마트 무선 터치 스위치 (일반 타입)"
          : params.locale === "en"
            ? "GUGU Smart Wireless Touch Switch (Standard Type)"
            : params.locale === "vi"
              ? "Công tắc cảm ứng không dây thông minh GUGU (Loại tiêu chuẩn)"
              : params.locale === "th"
                ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU (แบบมาตรฐาน)"
                : "GUGU智能无线触摸开关（标准型）",
      description:
        params.locale === "ko"
          ? "간편한 설치와 사용이 가능한 기본형 무선 스위치"
          : params.locale === "en"
            ? "Basic wireless switch with easy installation and use"
            : params.locale === "vi"
              ? "Công tắc không dây cơ bản với cài đặt và sử dụng dễ dàng"
              : params.locale === "th"
                ? "สวิตช์ไร้สายพื้นฐานที่ติดตั้งและใช้งานง่าย"
                : "安装和使用简便的基本型无线开关",
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
          alt={
            params.locale === "ko"
              ? "GUGU 무선 스위치"
              : params.locale === "en"
                ? "GUGU Wireless Switch"
                : params.locale === "vi"
                  ? "Công tắc không dây GUGU"
                  : params.locale === "th"
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
