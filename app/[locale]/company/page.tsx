"use client"

import { useTranslations } from "@/lib/translations"
import ImageSlider from "@/components/image-slider"
import Image from "next/image"

export default function CompanyPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 회사 이미지 경로 배열
  const companyImages = [
    "/images/company/001.jpg",
    "/images/company/002.jpg",
    "/images/company/003.jpg",
    "/images/company/004.jpg",
    "/images/company/005.jpg",
    "/images/company/006.jpg",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{t.companyIntroduction}</h1>

      {/* 회사 개요 */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">조명 인테리어의 새로운 기준을 세우다.</h2>
            <p className="text-gray-700 mb-4 text-2xl font-bold">주식회사 엘엔피 회사 소개</p>
            <p className="text-gray-700 mb-4">
              주식회사 엘엔피는 조명 및 인테리어 분야의 혁신을 목표로, 2019년에 설립된 전문 기업입니다. 우리는 편리한
              시공, 합리적인 가격, 우수한 품질을 기반으로, 고객의 만족과 가치를 높이는 데 최선을 다하고 있습니다.
            </p>

            <p className="text-gray-700 mb-4">
              특히, 저희가 개발한 우물천장 무드등 프레임과 무선 터치 스위치 제품은 업계의 패러다임을 새롭게 열었습니다.
              주식회사 엘엔피가 설립되기 전까지, 우물천장 무드등 시공은 고가의 목공 작업이 필요해, 비용 부담과 긴 공사
              기간, 심한 먼지 날림으로 인해 쉽게 접근할 수 없었습니다.
            </p>

            <p className="text-gray-700 mb-4">그러나 주식회사 엘엔피는</p>

            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li className="mb-2">합리적인 가격</li>
              <li className="mb-2">1시간 이내의 빠른 설치 시간</li>
              <li className="mb-2">먼지 걱정 없는 청결한 시공</li>
            </ul>

            <p className="text-gray-700 mb-4">
              이라는 혁신적인 솔루션을 통해, 우물천장 무드등 시공을 누구나 부담 없이 선택할 수 있는 시대를 열었습니다.
            </p>

            <p className="text-gray-700 mb-4">
              오늘날, 우물천장 무드등은 아파트 조명 인테리어의 필수 요소로 자리 잡았으며, 이 변화의 시작에는 주식회사
              엘엔피가 있습니다.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">핵심 가치 (Core Values)</h3>
              <ol className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">1. 고객 중심 (Customer Focus)</span> - 고객의 눈높이에서 생각하고,
                  고객의 편의를 최우선으로 고려합니다.
                </li>
                <li>
                  <span className="font-semibold">2. 품질 혁신 (Quality Innovation)</span> - 견고한 제품력과 안정적인
                  품질을 바탕으로 시장을 선도합니다.
                </li>
                <li>
                  <span className="font-semibold">3. 합리적 가치 제공 (Reasonable Value Offering)</span> - 높은 품질과
                  합리적인 가격을 동시에 실현하여, 누구나 부담 없이 선택할 수 있는 제품을 만듭니다.
                </li>
                <li>
                  <span className="font-semibold">4. 지속적인 성장과 도전 (Continuous Growth & Challenge)</span> -
                  트렌드에 머무르지 않고 끊임없이 개선하고, 새로운 도약을 위해 도전합니다.
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">앞으로의 약속</h3>
              <p className="text-gray-700">
                주식회사 엘엔피는 앞으로도 조명과 인테리어 분야에서 새로운 가치를 창출하며, 고객 여러분과 함께 성장해
                나가겠습니다.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <ImageSlider images={companyImages} interval={3000} className="shadow-lg" />
          </div>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.companyHistory}</h2>
        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 py-4">
          {/* 연혁 아이템 */}
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2023</div>
            <div className="text-gray-700">
              <p>{t.historyItem2023_1}</p>
              <p>{t.historyItem2023_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2022</div>
            <div className="text-gray-700">
              <p>{t.historyItem2022_1}</p>
              <p>{t.historyItem2022_2}</p>
              <p>{t.historyItem2022_3}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2021</div>
            <div className="text-gray-700">
              <p>{t.historyItem2021_1}</p>
              <p>{t.historyItem2021_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2020</div>
            <div className="text-gray-700">{t.historyItem2020_1}</div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2019</div>
            <div className="text-gray-700">
              <p>{t.historyItem2019_1}</p>
              <p>{t.historyItem2019_2}</p>
              <p>{t.historyItem2019_3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 특허 및 인증서 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.patentsAndCertificates}</h2>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">{t.patentsDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 이미지 1 - 우물천장 조립체 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-D3RkMKsBiZakljFRqIKcl8HzxQHap6.jpeg"
                alt="특허증 - 우물천장 조립체"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 우물천장 조립체</p>
          </div>

          {/* 이미지 2 - 우물천장 직간접 조명시스템 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-7xAjdW0zcmnpaE2A7SU47tFM1ieYQc.jpeg"
                alt="특허증 - 우물천장 직간접 조명시스템"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 우물천장 직간접 조명시스템</p>
          </div>

          {/* 이미지 3 - 디자인등록증 1 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-JLRtXCXdyqUUcxpEtZnIwfTpz1wUOH.jpeg"
                alt="디자인등록증 - 우물형 천장 조명등용 몰딩바"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">디자인등록증 - 우물형 천장 조명등용 몰딩바</p>
          </div>

          {/* 이미지 4 - 디자인등록증 2 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Ts4smtQvQBhMH7cWjU5MqwH53I4dcC.jpeg"
                alt="디자인등록증 - 우물형 천장 조명등용 몰딩바"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">디자인등록증 - 우물형 천장 조명등용 몰딩바</p>
          </div>

          {/* 이미지 5 - 무선 조명 제어 장치 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-zM5FIQLBaeSoqGel3XbPHcEKMTd37r.jpeg"
                alt="특허증 - 무선 조명 제어 장치"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 무선 조명 제어 장치</p>
          </div>

          {/* 이미지 6 - 연구개발전담부서 인정서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-wPNwQJcc1ptXz2ATeGmhC4JbD9frdz.jpeg"
                alt="연구개발전담부서 인정서"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">연구개발전담부서 인정서</p>
          </div>

          {/* 이미지 7 - 안전인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-A26ekncwaJ9LHFLBBa2qEd9OZeTKiZ.jpeg"
                alt="안전인증서 (KTR)"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">안전인증서 (KTR)</p>
          </div>

          {/* 이미지 8 - 방송통신기자재 적합인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-xTrK8dIs2FXRnjPVCwZWe15WhpMk4E.jpeg"
                alt="방송통신기자재 적합인증서"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">방송통신기자재 적합인증서</p>
          </div>
        </div>
      </section>

      {/* 비전 및 미션 */}
      <section className="bg-gray-50 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.visionAndMission}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{t.vision}</h3>
            <p className="text-gray-700">{t.visionText}</p>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{t.mission}</h3>
            <p className="text-gray-700">{t.missionText}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
