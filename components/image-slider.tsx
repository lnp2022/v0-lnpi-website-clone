"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: string[]
  interval?: number
  className?: string
}

export default function ImageSlider({ images, interval = 3000, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(timer)
  }, [goToNext, interval])

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <div className="relative w-full h-[400px] bg-gray-100">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`회사 이미지 ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority={currentIndex === 0}
          />
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white/90"
          onClick={goToPrevious}
          aria-label="이전 이미지"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/70 hover:bg-white/90"
          onClick={goToNext}
          aria-label="다음 이미지"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* 인디케이터 버튼 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  )
}
