"use client" // 🌟 바로 이 마법의 단어가 추가되었습니다!

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"

export default function AllInOneSwitchPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations(locale)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 1. 상단 타이틀 영역 */}
      <div className="text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
          🎉 LNP NEW ARRIVAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-gray-900">
          GUGU 올인원 무선 일괄 소등 스위치
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          간편한 5분 설치로 완성하는 우리 집 스마트 홈.<br/>
          이제 외출할 때마다 조명 끄느라 이방 저방 돌아다니지 마세요!
        </p>
      </div>

      {/* 2. 상세 페이지 이미지 영역 (나중에 진짜 이미지를 넣을 곳입니다) */}
      <div className="max-w-4xl mx-auto bg-gray-50 min-h-[600px] flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 mb-12 relative overflow-hidden">
        <p className="text-gray-500 text-lg font-medium z-10 text-center px-4">
          이곳에 핫템뷰님이 기획하신<br/>'제품 상세설명 이미지'가 길게 들어갈 자리입니다! 🖼️
        </p>
      </div>

      {/* 3. 하단 구매 문의 버튼 */}
      <div className="text-center pb-12">
        <Link href={`/${locale}/consultation`}>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all">
            구매 및 시공 문의하기
          </Button>
        </Link>
      </div>
    </div>
  )
}