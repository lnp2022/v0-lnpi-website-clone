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
      channels: 6,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rtqk48wmIEfMYcaNXoX0K4Cl2lNwyD.png",
    },
    {
      id: 2,
      channels: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-erjyD7r7S1vj8GrkRhPNSk00X6ZdAp.png",
    },
    {
      id: 3,
      channels: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-HsZROtjAnwtKkOWSWu1iVv7ZENxWvj.png",
    },
    {
      id: 4,
      channels: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-tmqTe8QTV4Hs9DGBzHptXKBuCclNAZ.png",
    },
    {
      id: 5,
      channels: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-75f5XaAVDFZjNAzCw4nBgcmyO7aVlF.png",
    },
    {
      id: 6,
      channels: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-xytrqg1a0jLxetgipOgjBwRHezh2vr.png",
    },
  ]

  // 앱 스토어 링크 - 실제 GUGU 앱 링크로 업데이트 필요
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.landp.le.kr"
  const appStoreLink = "https://apps.apple.com/kr/app/gugu-ble-smart-switch/id1663364839"

  // 제품 이름 가져오기
  const getProductName = (channels: number) => {
    switch (params.locale) {
      case "ko":
        return `[APP 연동] GUGU 스마트 무선 터치 스위치 ${channels}채널`
      case "en":
        return `[APP Support] GUGU Smart Wireless Touch Switch ${channels} Channel`
      case "vi":
        return `[Hỗ trợ APP] Công tắc cảm ứng không dây thông minh GUGU ${channels} kênh`
      case "th":
        return `[รองรับแอป] สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU ${channels} ช่อง`
      case "zh":
        return `[APP支持] GUGU智能无线触摸开关 ${channels}通道`
      default:
        return `[APP Support] GUGU Wireless Switch ${channels} Channel`
    }
  }

  // 제품 설명 가져오기
  const getProductDescription = (channels: number) => {
    switch (params.locale) {
      case "ko":
        return `스마트폰 앱으로 제어 가능한 ${channels}채널 무선 스위치`
      case "en":
        return `${channels} channel wireless switch controllable via smartphone app`
      case "vi":
        return `Công tắc không dây ${channels} kênh có thể điều khiển qua ứng dụng điện thoại thông minh`
      case "th":
        return `สวิตช์ไร้สาย ${channels} ช่องที่สามารถควบคุมผ่านแอปสมาร์ทโฟน`
      case "zh":
        return `可通过智能手机应用控制的${channels}通道无线开关`
      default:
        return `${channels} channel wireless switch controllable via smartphone app`
    }
  }

  // 제품 특징 가져오기
  const getProductFeatures = (channels: number) => {
    const features = []

    switch (params.locale) {
      case "ko":
        features.push("앱 연동 제어")
        features.push(channels === 1 ? "1채널 제어" : `${channels}채널 독립 제어`)
        features.push("1인 가구 안심 케어 서비스(제공 예정)")
        features.push("원격 제어")
        break
      case "en":
        features.push("App integration control")
        features.push(channels === 1 ? "1 channel control" : `${channels} channel independent control`)
        features.push("Single household safety care service (coming soon)")
        features.push("Remote control")
        break
      case "vi":
        features.push("Điều khiển tích hợp ứng dụng")
        features.push(channels === 1 ? "Điều khiển 1 kênh" : `Điều khiển độc lập ${channels} kênh`)
        features.push("Dịch vụ chăm sóc an toàn cho hộ gia đình đơn (sắp ra mắt)")
        features.push("Điều khiển từ xa")
        break
      case "th":
        features.push("การควบคุมการผสานแอป")
        features.push(channels === 1 ? "ควบคุม 1 ช่อง" : `ควบคุมอิสระ ${channels} ช่อง`)
        features.push("บริการดูแลความปลอดภัยสำหรับครัวเรือนเดี่ยว (เร็วๆ นี้)")
        features.push("การควบคุมระยะไกล")
        break
      case "zh":
        features.push("应用集成控制")
        features.push(channels === 1 ? "1通道控制" : `${channels}通道独立控制`)
        features.push("单人家庭安全护理服务（即将推出）")
        features.push("远程控制")
        break
      default:
        features.push("App integration")
        features.push(`${channels} channel control`)
        features.push("Safety care service")
        features.push("Remote control")
    }

    return features
  }

  // 섹션 제목 가져오기
  const getSectionTitle = (key: string) => {
    const titles = {
      appFeatures: {
        ko: "앱 주요 기능",
        en: "Main App Features",
        vi: "Tính năng chính của ứng dụng",
        th: "คุณสมบัติหลักของแอป",
        zh: "应用主要功能",
        default: "App Features",
      },
      remoteControl: {
        ko: "원격 제어",
        en: "Remote Control",
        vi: "Điều khiển từ xa",
        th: "การควบคุมระยะไกล",
        zh: "远程控制",
        default: "Remote Control",
      },
      switchBackup: {
        ko: "1+1 스위치",
        en: "1+1 Switch",
        vi: "Công tắc 1+1",
        th: "สวิตช์ 1+1",
        zh: "1+1开关",
        default: "1+1 Switch",
      },
      safetyCare: {
        ko: "안심 케어",
        en: "Safety Care",
        vi: "Chăm sóc an toàn",
        th: "การดูแลความปลอดภัย",
        zh: "安心护理",
        default: "Safety Care",
      },
      energySaving: {
        ko: "에너지 절감",
        en: "Energy Saving",
        vi: "Tiết kiệm năng lượng",
        th: "การประหยัดพลังงาน",
        zh: "节能",
        default: "Energy Saving",
      },
      appDownload: {
        ko: "GUGU 스마트 앱 다운로드",
        en: "GUGU Smart App Download",
        vi: "Tải xuống ứng dụng thông minh GUGU",
        th: "ดาวน์โหลดแอปอัจฉริยะ GUGU",
        zh: "GUGU智能应用下载",
        default: "GUGU App Download",
      },
      appInstallGuide: {
        ko: "어플 설치 및 설정 방법",
        en: "App Installation and Setup Guide",
        vi: "Hướng dẫn cài đặt và thiết lập ứng dụng",
        th: "คู่มือการติดตั้งและตั้งค่าแอป",
        zh: "应用安装和设置指南",
        default: "App Installation Guide",
      },
      googlePlay: {
        ko: "Google Play에서 다운로드",
        en: "Download from Google Play",
        vi: "Tải xuống từ Google Play",
        th: "ดาวน์โหลดจาก Google Play",
        zh: "从Google Play下载",
        default: "Download from Google Play",
      },
      appStore: {
        ko: "App Store에서 다운로드",
        en: "Download from App Store",
        vi: "Tải xuống từ App Store",
        th: "ดาวน์โหลดจาก App Store",
        zh: "从App Store下载",
        default: "Download from App Store",
      },
      keyFeatures: {
        ko: "주요 특징:",
        en: "Key Features:",
        vi: "Tính năng chính:",
        th: "คุณสมบัติหลัก:",
        zh: "主要特点:",
        default: "Key Features:",
      },
    }

    const locale = params.locale as keyof (typeof titles)[typeof key]
    return titles[key as keyof typeof titles][locale] || titles[key as keyof typeof titles].default
  }

  // 섹션 설명 가져오기
  const getSectionDescription = (key: string) => {
    const descriptions = {
      mainDescription: {
        ko: "GUGU 스마트 무선 터치 스위치 앱 지원 타입은 터치 스위치를 통해 조명 제어도 가능 하지만 스마트폰 앱을 통해서도 조명을 제어할 수 있는 스마트 홈 솔루션입니다. 단순 조명 제어 뿐만 아니라, 1인 가구 안심 케어 서비스 기능을 제공합니다. 1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.",
        en: "GUGU Smart Wireless Touch Switch App Support Type is a smart home solution that allows you to control lighting not only through the touch switch but also through a smartphone app. In addition to simple lighting control, it provides a safety care service function for single-person households. It offers various options from 1 channel to 6 channels so that customers can choose according to their needs.",
        vi: "Loại hỗ trợ ứng dụng công tắc cảm ứng không dây thông minh GUGU là giải pháp nhà thông minh cho phép bạn điều khiển ánh sáng không chỉ thông qua công tắc cảm ứng mà còn thông qua ứng dụng điện thoại thông minh. Ngoài điều khiển ánh sáng đơn giản, nó cung cấp chức năng dịch vụ chăm sóc an toàn cho các hộ gia đình một người. Nó cung cấp nhiều tùy chọn từ 1 kênh đến 6 kênh để khách hàng có thể lựa chọn theo nhu cầu của họ.",
        th: "สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU แบบรองรับแอปเป็นโซลูชันบ้านอัจฉริยะที่ช่วยให้คุณควบคุมแสงสว่างไม่เพียงแต่ผ่านสวิตช์สัมผัสแต่ยังผ่านแอปสมาร์ทโฟนด้วย นอกจากการควบคุมแสงสว่างอย่างง่ายแล้ว ยังมีฟังก์ชันบริการดูแลความปลอดภัยสำหรับครัวเรือนคนเดียว มีตัวเลือกหลากหลายตั้งแต่ 1 ช่องถึง 6 ช่องเพื่อให้ลูกค้าสามารถเลือกได้ตามความต้องการ",
        zh: "GUGU智能无线触摸开关应用支持型是一种智能家居解决方案，不仅可以通过触摸开关控制照明，还可以通过智能手机应用控制照明。除了简单的照明控制外，它还为单人家庭提供安全护理服务功能。它提供从1通道到6通道的各种选项，客户可以根据需求选择。",
        default:
          "This wireless switch allows control via both touch and smartphone app. It offers safety care services and comes in 1-6 channel options.",
      },
      appDownloadDesc: {
        ko: "GUGU 스마트 앱을 다운로드하여 더 많은 기능을 경험해보세요. iOS와 Android 모두 지원합니다.",
        en: "Download the GUGU Smart App to experience more features. Supports both iOS and Android.",
        vi: "Tải xuống ứng dụng thông minh GUGU để trải nghiệm nhiều tính năng hơn. Hỗ trợ cả iOS và Android.",
        th: "ดาวน์โหลดแอปอัจฉริยะ GUGU เพื่อสัมผัสประสบการณ์คุณสมบัติเพิ่มเติม รองรับทั้ง iOS และ Android",
        zh: "下载GUGU智能应用以体验更多功能。支持iOS和Android。",
        default: "Download the GUGU app for more features. Available for iOS and Android.",
      },
      remoteControlDesc: {
        ko: "집안 어디서나 스마트폰으로 조명을 제어할 수 있습니다.",
        en: "Control lighting from anywhere in your home with your smartphone.",
        vi: "Điều khiển ánh sáng từ bất kỳ đâu trong nhà bằng điện thoại thông minh của bạn.",
        th: "ควบคุมแสงสว่างจากทุกที่ในบ้านของคุณด้วยสมาร์ทโฟน",
        zh: "使用智能手机从家中任何地方控制照明。",
        default: "Control lights from anywhere with your phone.",
      },
      switchBackupDesc: {
        ko: "터치 스위치 분실 또는 고장 시 핸드폰으로 제어 가능",
        en: "Control with your phone when the touch switch is lost or malfunctioning",
        vi: "Điều khiển bằng điện thoại khi công tắc cảm ứng bị mất hoặc hỏng",
        th: "ควบคุมด้วยโทรศัพท์ของคุณเมื่อสวิตช์สัมผัสสูญหายหรือทำงานผิดปกติ",
        zh: "当触摸开关丢失或故障时，可以用手机控制",
        default: "Use your phone as backup when switch is unavailable.",
      },
      safetyCareDesc: {
        ko: "1인 가구를 위한 안심 케어 서비스를 제공합니다.",
        en: "Provides safety care service for single-person households.",
        vi: "Cung cấp dịch vụ chăm sóc an toàn cho các hộ gia đình một người.",
        th: "ให้บริการดูแลความปลอดภัยสำหรับครัวเรือนคนเดียว",
        zh: "为单人家庭提供安心护理服务。",
        default: "Safety monitoring for people living alone.",
      },
      energySavingDesc: {
        ko: "전체 ON/OFF 기능으로 한번에 조명 제어 가능",
        en: "Control all lighting at once with the all ON/OFF function",
        vi: "Điều khiển tất cả ánh sáng cùng một lúc với chức năng bật/tắt tất cả",
        th: "ควบคุมแสงสว่างทั้งหมดพร้อมกันด้วยฟังก์ชันเปิด/ปิดทั้งหมด",
        zh: "通过全部开/关功能一次控制所有照明",
        default: "Control all lights at once to save energy.",
      },
    }

    const locale = params.locale as keyof (typeof descriptions)[typeof key]
    return (
      descriptions[key as keyof typeof descriptions][locale] || descriptions[key as keyof typeof descriptions].default
    )
  }

  // 페이지 제목 가져오기
  const getPageTitle = () => {
    switch (params.locale) {
      case "ko":
        return "GUGU 스마트 무선 터치 스위치"
      case "en":
        return "GUGU Smart Wireless Touch Switch"
      case "vi":
        return "Công tắc cảm ứng không dây thông minh GUGU"
      case "th":
        return "สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU"
      case "zh":
        return "GUGU智能无线触摸开关"
      default:
        return "GUGU Wireless Switch"
    }
  }

  // 페이지 부제목 가져오기
  const getPageSubtitle = () => {
    switch (params.locale) {
      case "ko":
        return "앱 지원 타입\n블루투스 방식으로 최대 지원 수신 거리 : 50미터"
      case "en":
        return "App Support Type\nBluetooth method with maximum reception distance: 50 meters"
      case "vi":
        return "Loại hỗ trợ ứng dụng\nPhương thức Bluetooth với khoảng cách thu tối đa: 50 mét"
      case "th":
        return "แบบรองรับแอป\nวิธีบลูทูธที่มีระยะรับสัญญาณสูงสุด: 50 เมตร"
      case "zh":
        return "应用支持型\n蓝牙方式最大接收距离：50米"
      default:
        return "App Support Type\nBluetooth method with maximum reception distance: 50 meters"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${params.locale}/products/wireless-switch`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-center">{getPageTitle()}</h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center whitespace-pre-line">{getPageSubtitle()}</h2>

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
        <p className="text-gray-700 text-center max-w-3xl mx-auto">{getSectionDescription("mainDescription")}</p>
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64 w-full bg-gray-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={getProductName(product.channels)}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {params.locale === "ko" ? (
                  <>
                    {getProductName(product.channels).split("무선 터치")[0]}
                    <br />
                    {"무선 터치" + getProductName(product.channels).split("무선 터치")[1]}
                  </>
                ) : (
                  getProductName(product.channels)
                )}
              </h3>
              <p className="text-gray-700 mb-4">{getProductDescription(product.channels)}</p>
              <div>
                <h4 className="font-semibold mb-2">{getSectionTitle("keyFeatures")}</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {getProductFeatures(product.channels).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href={`/${params.locale}/consultation?product=${encodeURIComponent(getProductName(product.channels))}`}
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">{t.inquire}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 앱 기능 소개 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{getSectionTitle("appFeatures")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Smartphone className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("remoteControl")}</h3>
            <p className="text-center text-gray-700">{getSectionDescription("remoteControlDesc")}</p>
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
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("switchBackup")}</h3>
            <p className="text-center text-gray-700">{getSectionDescription("switchBackupDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Shield className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("safetyCare")}</h3>
            <p className="text-center text-gray-700">{getSectionDescription("safetyCareDesc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Zap className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("energySaving")}</h3>
            <p className="text-center text-gray-700">{getSectionDescription("energySavingDesc")}</p>
          </div>
        </div>
      </div>

      {/* 앱 다운로드 섹션 */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{getSectionTitle("appDownload")}</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{getSectionDescription("appDownloadDesc")}</p>

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
            <h3 className="text-xl font-bold mb-4 text-center">{getSectionTitle("appInstallGuide")}</h3>
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
            {getSectionTitle("googlePlay")}
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
            {getSectionTitle("appStore")}
          </a>
        </div>
      </div>
    </div>
  )
}
