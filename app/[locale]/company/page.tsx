"use client"

import { useTranslations } from "@/lib/translations"
import ImageSlider from "@/components/image-slider"
import Image from "next/image"
import { use } from "react"

export default function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const t = useTranslations(locale)

  const companyImages = [
    "/images/company/001.jpg",
    "/images/company/002.jpg",
    "/images/company/003.jpg",
    "/images/company/004.jpg",
    "/images/company/005.jpg",
    "/images/company/006.jpg",
  ]

  // 핵심 가치 데이터 정렬 (유지보수하기 쉽게 정리했습니다)
  const coreValues = [
    {
      id: "1",
      title: locale === "ko" ? "고객 중심 (Customer Focus)" : "Customer Focus",
      desc: locale === "ko" ? "고객의 눈높이에서 생각하고, 고객의 편의를 최우선으로 고려합니다." : "We think from the customer's perspective and prioritize customer convenience."
    },
    {
      id: "2",
      title: locale === "ko" ? "품질 혁신 (Quality Innovation)" : "Quality Innovation",
      desc: locale === "ko" ? "견고한 제품력과 안정적인 품질을 바탕으로 시장을 선도합니다." : "We lead the market based on solid product power and stable quality."
    },
    {
      id: "3",
      title: locale === "ko" ? "합리적 가치 제공 (Reasonable Value Offering)" : "Reasonable Value",
      desc: locale === "ko" ? "높은 품질과 합리적인 가격을 동시에 실현하여, 누구나 부담 없이 선택할 수 있는 제품을 만듭니다." : "We create products that anyone can choose without burden by realizing high quality and reasonable prices."
    },
    {
      id: "4",
      title: locale === "ko" ? "지속적인 성장과 도전 (Continuous Growth & Challenge)" : "Growth & Challenge",
      desc: locale === "ko" ? "트렌드에 머무르지 않고 끊임없이 개선하고, 새로운 도약을 위해 도전합니다." : "We continuously improve and challenge for new leaps, not staying in trends."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t.companyIntroduction}</h1>

      {/* [1] 회사 개요 섹션 - 텍스트와 슬라이더 정렬 복구 */}
      <section className="mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 w-full space-y-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">{t.companyTagline}</h2>
            <p className="text-2xl font-bold text-gray-900">{t.companyName2}</p>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed break-keep">
              <p>{t.companyDesc1}</p>
              <p>{t.companyDesc2}</p>
              <p>{t.companyDesc3}</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 my-8">
  <ul className="space-y-3 font-semibold text-gray-800">
    <li className="flex items-center gap-2">✅ {t.companyFeature1}</li>
    <li className="flex items-center gap-2">✅ {t.companyFeature2}</li>
    <li className="flex items-center gap-2">✅ {t.companyFeature3}</li>
  </ul>
</div>

<p className="text-lg text-gray-700 leading-relaxed break-keep">
  {t.companyConcludingSentence}
</p>
          </div>

          <div className="lg:w-1/2 w-full sticky top-24">
            <ImageSlider images={companyImages} interval={3000} className="shadow-2xl rounded-2xl overflow-hidden" />
          </div>
        </div>
      </section>

     {/* 핵심 가치 카드 섹션 */}
<section className="mb-24 bg-gray-50 py-16 px-8 rounded-3xl">
  <h2 className="text-3xl font-bold mb-12 text-center">{t.coreValueTitle}</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-5">
        <span className="text-3xl font-black text-orange-200">{num}</span>
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{t[`coreValue${num}Title` as keyof typeof t]}</h3>
          <p className="text-gray-600 leading-relaxed break-keep">{t[`coreValue${num}Desc` as keyof typeof t]}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* [3] 회사 연혁 - 신규 데이터 추가 버전 */}
<section className="mb-24 px-4">
  <h2 className="text-3xl font-bold mb-12 text-center">{t.companyHistory}</h2>
  <div className="max-w-3xl mx-auto border-l-2 border-orange-200 pl-8 space-y-12">
    {/* 🌟 연혁 배열에 "2025~2026"을 가장 앞에 추가했습니다. */}
    {["2025~2026", 2023, 2022, 2021, 2020, 2019].map((year) => (
      <div key={year.toString()} className="relative">
        <div className="absolute -left-[41px] top-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-white"></div>
        <div className="font-bold text-2xl text-orange-600 mb-3">{year}</div>
        <div className="text-gray-700 space-y-2 text-lg">
          {/* ✅ 신규 추가 항목 */}
          {year === "2025~2026" && (
            <>
              <p>{t.historyItem2025_1}</p>
              <p>{t.historyItem2025_2}</p>
            </>
          )}
          {/* 기존 항목들 */}
          {year === 2023 && <><p>{t.historyItem2023_1}</p><p>{t.historyItem2023_2}</p></>}
          {year === 2022 && <><p>{t.historyItem2022_1}</p><p>{t.historyItem2022_2}</p><p>{t.historyItem2022_3}</p></>}
          {year === 2021 && <><p>{t.historyItem2021_1}</p><p>{t.historyItem2021_2}</p></>}
          {year === 2020 && <p>{t.historyItem2020_1}</p>}
          {year === 2019 && <><p>{t.historyItem2019_1}</p><p>{t.historyItem2019_2}</p><p>{t.historyItem2019_3}</p></>}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* [4] 특허 및 인증서 - 그리드 정렬 복구 */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4 text-center">{t.patentsAndCertificates}</h2>
        <p className="text-gray-600 text-center mb-12">{t.patentsDescription}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] w-full mb-3">
                <Image src={`/images/company/${num}.png`} alt={`인증서 ${num}`} fill className="object-contain p-2" />
              </div>
              <p className="text-sm text-center text-gray-500 font-medium">
                {num === 1 ? "우물천장 조립체" : num === 2 ? "직간접 조명시스템" : "특허 및 인증"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* [5] 위치 정보 - 지도 레이아웃 고정 */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">{locale === "ko" ? "오시는 길" : "Location"}</h2>
        <div className="text-center mb-8 space-y-2">
          <p className="text-xl font-bold">경기도 김포시 태장로 789, 지하 1층 B103호</p>
          <p className="text-gray-500">B103, B1F, 789, Taejang-ro, Gimpo-si, Gyeonggi-do</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.05!2d126.68!3d37.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM4JzI0LjAiTiAxMjbCsDQwJzQ4LjAiRQ!5e0!3m2!1sko!2skr!4v123456789"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          ></iframe>
        </div>
        <div className="mt-8 flex justify-center">
           <a href="https://map.naver.com" target="_blank" className="bg-[#03C75A] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
             📍 네이버 지도로 보기
           </a>
        </div>
      </section>
    </div>
  )
}