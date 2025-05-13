"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Shield, Zap } from "lucide-react"

export default function AppWirelessSwitchPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 앱 지원 타입 무선 스위치 제품 데이터
  const products = [
    {
      id: 1,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 6채널",
      description: "스마트폰 앱으로 제어 가능한 6채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rtqk48wmIEfMYcaNXoX0K4Cl2lNwyD.png",
      features: ["앱 연동 제어", "6채널 독립 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
    {
      id: 2,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 5채널",
      description: "스마트폰 앱으로 제어 가능한 5채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-erjyD7r7S1vj8GrkRhPNSk00X6ZdAp.png",
      features: ["앱 연동 제어", "5채널 독립 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
    {
      id: 3,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 4채널",
      description: "스마트폰 앱으로 제어 가능한 4채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-HsZROtjAnwtKkOWSWu1iVv7ZENxWvj.png",
      features: ["앱 연동 제어", "4채널 독립 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
    {
      id: 4,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 3채널",
      description: "스마트폰 앱으로 제어 가능한 3채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-tmqTe8QTV4Hs9DGBzHptXKBuCclNAZ.png",
      features: ["앱 연동 제어", "3채널 독립 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
    {
      id: 5,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 2채널",
      description: "스마트폰 앱으로 제어 가능한 2채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-75f5XaAVDFZjNAzCw4nBgcmyO7aVlF.png",
      features: ["앱 연동 제어", "2채널 독립 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
    {
      id: 6,
      name: "[APP 연동] GUGU 스마트 무선 터치 스위치 1채널",
      description: "스마트폰 앱으로 제어 가능한 1채널 무선 스위치",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-xytrqg1a0jLxetgipOgjBwRHezh2vr.png",
      features: ["앱 연동 제어", "1채널 제어", "1인 가구 안심 케어 서비스(제공 예정)", "원격 제어"],
    },
  ]

  // 앱 스토어 링크 - 실제 GUGU 앱 링크로 업데이트 필요
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.landp.le.kr"
  const appStoreLink = "https://apps.apple.com/kr/app/gugu-ble-smart-switch/id1663364839"

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${params.locale}/products/wireless-switch`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-center">GUGU 스마트 무선 터치 스위치</h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">앱 지원 타입</h2>

      {/* 제품 정보 이미지 */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/images/wireless-switch/product-info-wide.png"
                alt="GUGU 무선 스위치 제품 정보"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          GUGU 스마트 무선 터치 스위치 앱 지원 타입은 터치 스위치를 통해 조명 제어도 가능 하지만
          <br />
          스마트폰 앱을 통해서도 조명을 제어할 수 있는 스마트 홈 솔루션입니다. <br />
          단순 조명 제어 뿐만 아니라, 1인 가구 안심 케어 서비스 기능을 제공합니다. <br />
          1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.
        </p>
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64 w-full bg-gray-50">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {product.name.includes("[APP 연동]") ? (
                  <>
                    {product.name.split("무선 터치")[0]}
                    <br />
                    {"무선 터치" + product.name.split("무선 터치")[1]}
                  </>
                ) : (
                  product.name
                )}
              </h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div>
                <h4 className="font-semibold mb-2">주요 특징:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link href={`/${params.locale}/consultation?product=${encodeURIComponent(product.name)}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">{t.inquire}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 앱 기능 소개 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">앱 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Smartphone className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">원격 제어</h3>
            <p className="text-center text-gray-700">집안 어디서나 스마트폰으로 조명을 제어할 수 있습니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
            <h3 className="text-lg font-bold mb-2">1+1 스위치</h3>
            <p className="text-center text-gray-700">터치 스위치 분실 또는 고장 시 핸드폰으로 제어 가능</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Shield className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">안심 케어</h3>
            <p className="text-center text-gray-700">1인 가구를 위한 안심 케어 서비스를 제공합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Zap className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">에너지 절감</h3>
            <p className="text-center text-gray-700">전체 ON/OFF 기능으로 한번에 조명 제어 가능</p>
          </div>
        </div>
      </div>

      {/* 앱 다운로드 섹션 */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">GUGU 스마트 앱 다운로드</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          GUGU 스마트 앱을 다운로드하여 더 많은 기능을 경험해보세요. iOS와 Android 모두 지원합니다.
        </p>

        {/* QR 코드 이미지 추가 */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RdMqxUhN19Ory8ccfRJqiIllsKtIPV.png"
            alt="GUGU 스마트 앱 다운로드 QR 코드"
            width={500}
            height={200}
            className="rounded-lg shadow-md mb-6"
          />

          <div className="w-full max-w-4xl mt-4">
            <h3 className="text-xl font-bold mb-4 text-center">어플 설치 및 설정 방법</h3>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-005-4hDOc7rKUmybkTdrRISvDuPa1F42v6.png"
              alt="GUGU 스마트 앱 설치 및 사용 가이드"
              width={600}
              height={600}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.9,2.4c-0.1,0-0.2,0-0.3,0.1l-10,5.7C7.5,8.2,7.5,8.3,7.5,8.4v0c0,0.1,0,0.2,0.1,0.3l2.2,2.2l-2.2,2.2 C7.5,13.2,7.5,13.3,7.5,13.4v0c0,0.1,0,0.2,0.1,0.3l10,5.7c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4-0.2,0.4-0.4V2.8 C18.3,2.6,18.1,2.4,17.9,2.4z M11.5,8.4l-2.7-4.6l6.4,3.6L11.5,8.4z M8.8,12.2l2.7-2.7l3.7,1.1L8.8,12.2z M11.5,15.6l-2.7-4.6 l6.4,1.6L11.5,15.6z"></path>
            </svg>
            Google Play에서 다운로드
          </a>

          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"></path>
            </svg>
            App Store에서 다운로드
          </a>
        </div>
      </div>
    </div>
  )
}
