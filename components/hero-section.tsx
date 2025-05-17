"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations(locale)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 프로젝트에 이미 존재하는 이미지 사용
  const images = [
    "/images/move/001.jpg",
    "/images/move/002.jpg",
    "/images/move/003.jpg",
    "/images/move/004.jpg",
  ]

  // 이미지 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="w-full mx-auto mb-8">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-md bg-gray-100"
            style={{ paddingBottom: "56.25%" }} // 16:9 비율
          >
            {/* 단순화된 이미지 슬라이드쇼 */}
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden={index !== currentImageIndex}
              />
            ))}
          </div>
        </div>

        {/* 텍스트 및 버튼 - 비디오 아래에 명확하게 분리 */}
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
    </section>
  )
}
