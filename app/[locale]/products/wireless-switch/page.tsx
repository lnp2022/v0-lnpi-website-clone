"use client"

import { useTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, use } from "react"

export default function WirelessSwitchPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const t = useTranslations(locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 🌟 1. 카테고리 탭 구성 (올인원 추가 및 5개 국어 반영)
  const categories = [
    {
      id: "all",
      name: locale === "ko" ? "전체 제품" : locale === "en" ? "All Products" : locale === "vi" ? "Tất cả sản phẩm" : locale === "th" ? "สินค้าทั้งหมด" : "所有产品",
    },
    {
      id: "app-type",
      name: locale === "ko" ? "앱 지원 타입" : locale === "en" ? "App Support Type" : locale === "vi" ? "Loại hỗ trợ ứng dụng" : locale === "th" ? "แบบรองรับแอป" : "应用支持型",
    },
    {
      id: "standard-type",
      name: locale === "ko" ? "일반 타입" : locale === "en" ? "Standard Type" : locale === "vi" ? "Loại tiêu chuẩn" : locale === "th" ? "แบบมาตรฐาน" : "标准型",
    },
    {
      id: "allinone-type",
      name: locale === "ko" ? "일괄소등 올인원 스위치" : locale === "en" ? "Batch Off All-in-One Switch" : locale === "vi" ? "Công tắc All-in-One" : locale === "th" ? "สวิตช์ออลอินวัน" : "全合一开关",
    },
  ]

  // 🌟 2. 제품 데이터 (올인원 스위치 신규 추가)
  const products = [
    {
      id: 1,
      name: locale === "ko" ? "GUGU 스마트 무선 터치 스위치 (앱 지원 타입)" : locale === "en" ? "GUGU Smart Wireless Touch Switch (App Support)" : locale === "vi" ? "Công tắc GUGU (App)" : locale === "th" ? "สวิตช์ GUGU (แอป)" : "GUGU智能开关 (应用型)",
      description: locale === "ko" ? "스마트폰 앱으로 제어 가능한 고급형 무선 스위치" : locale === "en" ? "Premium wireless switch with smartphone app control" : locale === "vi" ? "Công tắc cao cấp điều khiển qua ứng dụng" : locale === "th" ? "สวิตช์พรีเมียมควบคุมผ่านแอป" : "可通过应用控制的高级开关",
      category: "app-type",
       image: "/images/wireless-switch/001.png",
       link: `/${locale}/products/wireless-switch/type2`,
    },
    {
      id: 2,
      name: locale === "ko" ? "GUGU 스마트 무선 터치 스위치 (일반 타입)" : locale === "en" ? "GUGU Smart Wireless Touch Switch (Standard)" : locale === "vi" ? "Công tắc GUGU (Tiêu chuẩn)" : locale === "th" ? "สวิตช์ GUGU (มาตรฐาน)" : "GUGU智能开关 (标准型)",
      description: locale === "ko" ? "간편한 설치와 사용이 가능한 기본형 무선 스위치" : locale === "en" ? "Basic wireless switch with easy installation" : locale === "vi" ? "Công tắc cơ bản dễ lắp đặt" : locale === "th" ? "สวิตช์พื้นฐานติดตั้งง่าย" : "易于 설치的基准型开关",
      category: "standard-type",
      image: "/images/wireless-switch/002.png",
      link: `/${locale}/products/wireless-switch/type1`,
    },
    {
      id: 3,
      name: locale === "ko" ? "GUGU 일괄소등 올인원 스위치" : locale === "en" ? "GUGU Batch Off All-in-One Switch" : locale === "vi" ? "Công tắc All-in-One GUGU" : locale === "th" ? "สวิตช์ GUGU ออลอิน원" : "GUGU全合一开关",
  // 🌟 안심케어 서비스(특허) 내용으로 전면 수정 완료!
      description: 
        locale === "ko" 
           ? "무선 일괄 소등 스위치 + 안심케어 서비스(특허)" 
           : locale === "en" 
             ? "Wireless Batch Off Switch + Safety Care Service (Patent)" 
             : locale === "vi" 
               ? "Công tắc tắt đồng loạt không dây + Dịch vụ chăm sóc an tâm (Bằng sáng chế)" 
               : locale === "th" 
                 ? "สวิตช์ปิดไฟรวมแบบไร้สาย + บริการดูแลความปลอดภัย (สิทธิบัตร)" 
                 : "无线一键总关开关 + 安心护理服务（专利）",
  category: "allinone-type",
      image: "/images/wireless-switch/allinone.png",
      link: `/${locale}/products/wireless-switch/all-in-one`,
    },
  ]

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* ✅ 3. 가장 위 히어로 배너 이미지 변경 */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-white">
        <Image
          src="/images/wireless-switch/main.png" 
          alt="GUGU Switch Lineup"
          fill
          className="object-contain p-8"
          priority
        />
      </div>

      {/* 서브 카테고리 네비게이션 */}
      <div className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-sm md:text-base px-1 py-2 border-b-2 transition-colors ${
                  activeCategory === category.id ? "border-orange-500 text-orange-500 font-bold" : "border-transparent text-gray-600 hover:text-gray-900"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={product.link} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full bg-gray-50">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}