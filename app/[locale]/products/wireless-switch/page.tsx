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

  // 카테고리 이름 가져오기
  const getCategoryName = (id: string) => {
    switch (id) {
      case "all":
        switch (params.locale) {
          case "ko":
            return "전체 제품"
          case "en":
            return "All Products"
          case "vi":
            return "Tất cả sản phẩm"
          case "th":
            return "สินค้าทั้งหมด"
          case "zh":
            return "所有产品"
          default:
            return "All Products"
        }
      case "app-type":
        switch (params.locale) {
          case "ko":
            return "앱 지원 타입"
          case "en":
            return "App Support Type"
          case "vi":
            return "Loại hỗ trợ ứng dụng"
          case "th":
            return "ประเภทที่รองรับแอป"
          case "zh":
            return "应用支持类型"
          default:
            return "App Support Type"
        }
      case "standard-type":
        switch (params.locale) {
          case "ko":
            return "일반 타입"
          case "en":
            return "Standard Type"
          case "vi":
            return "Loại tiêu chuẩn"
          case "th":
            return "ประเภทมาตรฐาน"
          case "zh":
            return "标准类型"
          default:
            return "Standard Type"
        }
      default:
        return id
    }
  }

  // 제품 이름 가져오기
  const getProductName = (id: number) => {
    switch (id) {
      case 1:
        switch (params.locale) {
          case "ko":
            return "GUGU 스마트 무선 터치 스위치 (앱 지원 타입)"
          case "en":
            return "GUGU Smart Wireless Touch Switch (App Support Type)"
          case "vi":
            return "Công tắc cảm ứng không dây thông minh GUGU (Loại hỗ trợ ứng dụng)"
          case "th":
            return "สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU (ประเภทที่รองรับแอป)"
          case "zh":
            return "GUGU智能无线触摸开关（应用支持类型）"
          default:
            return "GUGU Smart Wireless Touch Switch (App Support Type)"
        }
      case 2:
        switch (params.locale) {
          case "ko":
            return "GUGU 스마트 무선 터치 스위치 (일반 타입)"
          case "en":
            return "GUGU Smart Wireless Touch Switch (Standard Type)"
          case "vi":
            return "Công tắc cảm ứng không dây thông minh GUGU (Loại tiêu chuẩn)"
          case "th":
            return "สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU (ประเภทมาตรฐาน)"
          case "zh":
            return "GUGU智能无线触摸开关（标准类型）"
          default:
            return "GUGU Smart Wireless Touch Switch (Standard Type)"
        }
      default:
        return `Product ${id}`
    }
  }

  // 제품 설명 가져오기
  const getProductDescription = (id: number) => {
    switch (id) {
      case 1:
        switch (params.locale) {
          case "ko":
            return "스마트폰 앱으로 제어 가능한 고급형 무선 스위치\n블루투스 통신 방식으로 최대 수신 거리 : 50미터"
          case "en":
            return "Premium wireless switch controllable via smartphone app\nBluetooth communication method with maximum reception distance: 50 meters"
          case "vi":
            return "Công tắc không dây cao cấp có thể điều khiển qua ứng dụng điện thoại thông minh\nPhương thức giao tiếp Bluetooth với khoảng cách thu tối đa: 50 mét"
          case "th":
            return "สวิตช์ไร้สายระดับพรีเมียมที่สามารถควบคุมผ่านแอปสมาร์ทโฟน\nวิธีการสื่อสารบลูทูธที่มีระยะรับสัญญาณสูงสุด: 50 เมตร"
          case "zh":
            return "可通过智能手机应用控制的高级无线开关\n蓝牙通信方式最大接收距离：50米"
          default:
            return "Premium wireless switch controllable via smartphone app\nBluetooth communication method with maximum reception distance: 50 meters"
        }
      case 2:
        switch (params.locale) {
          case "ko":
            return "간편한 설치와 사용이 가능한 기본형 무선 스위치"
          case "en":
            return "Basic wireless switch with easy installation and use"
          case "vi":
            return "Công tắc không dây cơ bản với cài đặt và sử dụng dễ dàng"
          case "th":
            return "สวิตช์ไร้สายพื้นฐานที่ติดตั้งและใช้งานง่าย"
          case "zh":
            return "安装和使用简便的基本无线开关"
          default:
            return "Basic wireless switch with easy installation and use"
        }
      default:
        return `Description for product ${id}`
    }
  }

  // 무선 스위치 서브 카테고리
  const categories = [
    { id: "all", name: getCategoryName("all") },
    { id: "app-type", name: getCategoryName("app-type") },
    { id: "standard-type", name: getCategoryName("standard-type") },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name: getProductName(1),
      description: getProductDescription(1),
      category: "app-type",
      image: "/images/wireless-switch/001.png",
      link: `/${params.locale}/products/wireless-switch/type2`,
    },
    {
      id: 2,
      name: getProductName(2),
      description: getProductDescription(2),
      category: "standard-type",
      image: "/images/wireless-switch/002.png",
      link: `/${params.locale}/products/wireless-switch/type1`,
    },
  ]

  // 현재 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  // 페이지 제목 가져오기
  const getPageTitle = () => {
    switch (params.locale) {
      case "ko":
        return "GUGU 무선 스위치"
      case "en":
        return "GUGU Wireless Switch"
      case "vi":
        return "Công tắc không dây GUGU"
      case "th":
        return "สวิตช์ไร้สาย GUGU"
      case "zh":
        return "GUGU无线开关"
      default:
        return "GUGU Wireless Switch"
    }
  }

  return (
    <div className="flex flex-col">
      {/* 히어로 배너 */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-white">
        <Image
          src="/images/wireless-switch/main.png"
          alt={getPageTitle()}
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
                  <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
