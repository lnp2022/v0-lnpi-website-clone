"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/product-showcase"
import CompanyHighlights from "@/components/company-highlights"
import HeroSection from "@/components/hero-section"
import { useTranslations } from "@/lib/translations"

export default function Home({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  return (
    <div className="flex flex-col">
      <HeroSection locale={params.locale} />

      {/* 회사 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{t.companyIntroTitle}</h2>
              <p className="text-gray-700 mb-6">{t.companyIntroDescription}</p>
              <Link href={`/${params.locale}/company`}>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  {t.learnMore}
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              {/* 이미지 크기: 높이 320px(20rem), 너비는 반응형(모바일에서는 전체 너비, 데스크탑에서는 컨테이너의 절반) */}
              {/* 최적 이미지 크기: 1280px x 720px (16:9 비율) 또는 1024px x 768px (4:3 비율) */}
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/company-office-new.jpg" alt={t.companyImage} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 제품 쇼케이스 */}
      <ProductShowcase locale={params.locale} />

      {/* 회사 하이라이트 */}
      <CompanyHighlights locale={params.locale} />

      {/* 컨설팅 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.freeConsultation}</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">{t.consultationDescription}</p>
          <Link href={`/${params.locale}/consultation`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">{t.contactUs}</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
