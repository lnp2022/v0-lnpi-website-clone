"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"
import { use } from "react" // ✅ 최신 엔진용 필수 도구 추가

export default function AllInOneSwitchPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> // ✅ Promise 타입으로 수정
}) {
  // ✅ 아래 줄을 통해 locale을 안전하게 가져옵니다.
  const { locale } = use(params)
  const t = useTranslations(locale)

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* 🌟 핫템뷰님 기획: 우측 상단 고정 구매 버튼 (원본 그대로 유지) */}
      <div className="fixed top-28 right-4 md:right-8 z-50">
        <Link href={`/${locale}/consultation`}>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all border-2 border-white animate-bounce-slow">
            구매 및 시공 문의하기 👆
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 1. 상단 타이틀 영역 (원본 문구 그대로 유지) */}
        <div className="text-center mb-10 mt-4">
          <span className="inline-block bg-orange-100 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
            🎉 LNP NEW ARRIVAL
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">
            GUGU 올인원 무선 일괄 소등 스위치
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            간편한 5분 설치로 완성하는 우리 집 스마트 홈.<br/>
            이제 외출할 때마다 조명 끄느라 이방 저방 돌아다니지 마세요!<br/>
            아직도 혼자 사시는 부모님 걱정, 자녀 걱정에 잠 못 이루시나요? <br/>
            GUGU 올인원 스위치가 일괄 소등 스위치는 기본!!! <br/>
            안심 케어 서비스 까지 제공해 드립니다.<br/>
          </p>
        </div>

        {/* 2. 상세 페이지 이미지 영역 (원본 크기 그대로 유지) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm mb-12 overflow-hidden border border-gray-100">
          <Image
            src="/images/all-in-one-detail.jpg"
            alt="GUGU 올인원 무선 스위치 상세 설명"
            width={1000}
            height={5000}
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* 3. 모바일 화면을 위한 하단 추가 버튼 (원본 그대로 유지) */}
        <div className="text-center pb-12 md:hidden">
          <Link href={`/${locale}/consultation`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg w-full">
              구매 및 시공 문의하기
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}