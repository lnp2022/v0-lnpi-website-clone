"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations(locale)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of hero images to cycle through
  const heroImages = [
    "/images/hero-slides/slide1.jpg",
    "/images/hero-slides/slide2.jpg",
    "/images/hero-slides/slide3.jpg",
    "/images/hero-slides/slide4.jpg",
  ]

  // Effect to change image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Image slideshow container */}
        <div className="w-full mx-auto mb-8">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-md bg-gray-100"
            style={{ paddingBottom: "56.25%" }} // 16:9 ratio
          >
            {/* Image slideshow */}
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
