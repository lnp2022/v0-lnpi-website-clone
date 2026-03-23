"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations(locale)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // 팝업창을 띄울지 말지 결정하는 스위치입니다 (기본값: true 켜짐)
  const [showPopup, setShowPopup] = useState(true)

  const heroImages = [
    "/images/hero-slides/slide1.jpg",
    "/images/hero-slides/slide2.jpg",
    "/images/hero-slides/slide3.jpg",
    "/images/hero-slides/slide4.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-white">
      {/* 기존 메인 화면 내용 시작 (변경 없음) */}
      <div className="container mx-auto px-4 py-6">
        <div className="w-full mx-auto mb-8">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-md bg-gray-100"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0">
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src || "/placeholder.svg"}
                  alt={`Hero slide ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-3 text-gray-900"
            style={{ fontFamily: "serif" }}
          >
            LIGHTING INNOVATION
          </h1>
          <p className="text-lg md:text-xl mb-5 max-w-3xl mx-auto text-gray-700">
            최고의 조명 인테리어 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/products`}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none px-8 py-3 text-lg">
                {t.exploreProducts}
              </Button>
            </Link>
            <Link href={`/${locale}/consultation`}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none px-8 py-3 text-lg">
                {t.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* 기존 메인 화면 내용 끝 */}

      {/* 🌟 신제품 팝업 창 코드 시작 🌟 */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            
            {/* 팝업 이미지 들어가는 곳 */}
            <div className="relative w-full h-[400px] bg-gray-100">
              <Image
                src="/images/popup.jpg" // 나중에 여기에 진짜 팝업 이미지 이름을 넣을 거예요!
                alt="신제품 출시 안내"
                fill
                className="object-contain"
              />
            </div>
            
            {/* 하단 닫기 버튼 영역 */}
            <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100">
              <p className="text-sm font-bold text-orange-600">
                🎉 LNP 신제품 출시
              </p>
              <Button 
                onClick={() => setShowPopup(false)}
                variant="outline" 
                className="border-gray-300 text-gray-600 hover:bg-gray-100 px-6"
              >
                닫기 ✕
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* 🌟 신제품 팝업 창 코드 끝 🌟 */}
    </section>
  )
}