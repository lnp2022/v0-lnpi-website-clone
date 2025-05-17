"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HeroSection() {
  const t = useTranslations("Hero")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const images = ["/images/move/001.jpg", "/images/move/002.jpg", "/images/move/003.jpg", "/images/move/004.jpg"]

  useEffect(() => {
    // Preload images
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(src)
        img.onerror = (error) => {
          console.error(`Failed to load image: ${src}`, error)
          reject(error)
        }
      })
    })

    // Set loading to false when at least one image is loaded
    Promise.any(imagePromises)
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("모든 이미지 로딩 실패:", error)
        setIsLoading(false) // Still set loading to false to show something
      })

    // Set up image rotation
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-xl font-medium">이미지 로딩 중...</p>
        </div>
      ) : (
        <>
          {images.map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: currentImageIndex === index ? 10 : 0,
              }}
              aria-hidden={currentImageIndex !== index}
            />
          ))}

          <div className="absolute inset-0 bg-black/30 z-20" />

          <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">{t("title")}</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">{t("subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ko/products"
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t("productButton")}
              </Link>
              <Link
                href="/ko/consultation"
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t("consultButton")}
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
