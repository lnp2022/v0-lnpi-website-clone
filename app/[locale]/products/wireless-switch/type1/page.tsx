"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { useState, use } from "react" // ✅ use를 추가했습니다.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StandardWirelessSwitchPage({
  params,
}: {
  params: Promise<{ locale: string }> // ✅ Promise 타입으로 수정했습니다.
}) {
  // ✅ 아래 한 줄로 locale을 안전하게 가져오며, 다른 데이터는 전혀 건드리지 않습니다.
  const { locale } = use(params)
  const t = useTranslations(locale)
  const [isDownloading, setIsDownloading] = useState(false)

  // 구글 드라이브 PDF 파일 URL
  const koreanCatalogUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/view?usp=sharing"
  const englishCatalogUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/view?usp=sharing"
  // iframe에서 사용할 임베딩 URL
  const koreanCatalogEmbedUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/preview"
  const englishCatalogEmbedUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/preview"

  // 일반 타입 무선 스위치 제품 데이터 부분을 다음과 같이 변경합니다:
  const products = [
    {
      id: 1,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 6채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 6 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 6 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 6 ช่อง"
                : "GUGU标准无线触摸开关6通道",
      description:
        locale === "ko"
          ? "6개의 독립적인 채널을 제공하는 무선 스위치"
          : locale === "en"
            ? "Wireless switch providing 6 independent channels"
            : locale === "vi"
              ? "Công tắc không dây cung cấp 6 kênh độc lập"
              : locale === "th"
                ? "สวิตช์ไร้สายที่มี 6 ช่องอิสระ"
                : "提供6个独立通道的无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001-DIALUXbgc5KkkhqAKtXm1t7kCqcVeS.png",
      features: [
        locale === "ko"
          ? "6채널 독립 제어"
          : locale === "en"
            ? "6 Channel Independent Control"
            : locale === "vi"
              ? "Điều khiển độc lập 6 kênh"
              : locale === "th"
                ? "การควบคุมอิสระ 6 ช่อง"
                : "6通道独立控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
    {
      id: 2,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 5채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 5 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 5 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 5 ช่อง"
                : "GUGU标准无线触摸开关5通道",
      description:
        locale === "ko"
          ? "5개의 독립적인 채널을 제공하는 무선 스위치"
          : locale === "en"
            ? "Wireless switch providing 5 independent channels"
            : locale === "vi"
              ? "Công tắc không dây cung cấp 5 kênh độc lập"
              : locale === "th"
                ? "สวิตช์ไร้สายที่มี 5 ช่องอิสระ"
                : "提供5个独立通道的无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002-Xjs1c4VEPRQsqpCAj4keLIH56KbJt9.png",
      features: [
        locale === "ko"
          ? "5채널 독립 제어"
          : locale === "en"
            ? "5 Channel Independent Control"
            : locale === "vi"
              ? "Điều khiển độc lập 5 kênh"
              : locale === "th"
                ? "การควบคุมอิสระ 5 ช่อง"
                : "5通道独立控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
    {
      id: 3,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 4채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 4 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 4 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 4 ช่อง"
                : "GUGU标准无线触摸开关4通道",
      description:
        locale === "ko"
          ? "4개의 독립적인 채널을 제공하는 무선 스위치"
          : locale === "en"
            ? "Wireless switch providing 4 independent channels"
            : locale === "vi"
              ? "Công tắc không dây cung cấp 4 kênh độc lập"
              : locale === "th"
                ? "สวิตช์ไร้สายที่มี 4 ช่องอิสระ"
                : "提供4个独立通道的无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/003-qdmNeHYLUOlHNucGOqHbzRLSttyH2r.png",
      features: [
        locale === "ko"
          ? "4채널 독립 제어"
          : locale === "en"
            ? "4 Channel Independent Control"
            : locale === "vi"
              ? "Điều khiển độc lập 4 kênh"
              : locale === "th"
                ? "การควบคุมอิสระ 4 ช่อง"
                : "4通道独立控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
    {
      id: 4,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 3채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 3 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 3 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 3 ช่อง"
                : "GUGU标准无线触摸开关3通道",
      description:
        locale === "ko"
          ? "3개의 독립적인 채널을 제공하는 무선 스위치"
          : locale === "en"
            ? "Wireless switch providing 3 independent channels"
            : locale === "vi"
              ? "Công tắc không dây cung cấp 3 kênh độc lập"
              : locale === "th"
                ? "สวิตช์ไร้สายที่มี 3 ช่องอิสระ"
                : "提供3个独立通道的无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/004-4Ki6VGu2rxfzhYuQ2pD6nX1pAvzy2j.png",
      features: [
        locale === "ko"
          ? "3채널 독립 제어"
          : locale === "en"
            ? "3 Channel Independent Control"
            : locale === "vi"
              ? "Điều khiển độc lập 3 kênh"
              : locale === "th"
                ? "การควบคุมอิสระ 3 ช่อง"
                : "3通道独立控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
    {
      id: 5,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 2채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 2 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 2 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 2 ช่อง"
                : "GUGU标准无线触摸开关2通道",
      description:
        locale === "ko"
          ? "2개의 독립적인 채널을 제공하는 무선 스위치"
          : locale === "en"
            ? "Wireless switch providing 2 independent channels"
            : locale === "vi"
              ? "Công tắc không dây cung cấp 2 kênh độc lập"
              : locale === "th"
                ? "สวิตช์ไร้สายที่มี 2 ช่องอิสระ"
                : "提供2个独立通道的无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/005-1mHh7UO7x7zc6YSkwkrXxBjiR8LNmC.png",
      features: [
        locale === "ko"
          ? "2채널 독립 제어"
          : locale === "en"
            ? "2 Channel Independent Control"
            : locale === "vi"
              ? "Điều khiển độc lập 2 kênh"
              : locale === "th"
                ? "การควบคุมอิสระ 2 ช่อง"
                : "2通道独立控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
    {
      id: 6,
      name:
        locale === "ko"
          ? "GUGU 일반 무선 터치 스위치 1채널"
          : locale === "en"
            ? "GUGU Standard Wireless Touch Switch 1 Channel"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây tiêu chuẩn GUGU 1 kênh"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายมาตรฐาน GUGU 1 ช่อง"
                : "GUGU标准无线触摸开关1通道",
      description:
        locale === "ko"
          ? "1개의 채널을 제공하는 심플한 무선 스위치"
          : locale === "en"
            ? "Simple wireless switch providing 1 channel"
            : locale === "vi"
              ? "Công tắc không dây đơn giản cung cấp 1 kênh"
              : locale === "th"
                ? "สวิตช์ไร้สายแบบเรียบง่ายที่มี 1 ช่อง"
                : "提供1个通道的简单无线开关",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/006-JadHl2SunceNfFKHscbC8V1bsYeppK.png",
      features: [
        locale === "ko"
          ? "1채널 제어"
          : locale === "en"
            ? "1 Channel Control"
            : locale === "vi"
              ? "Điều khiển 1 kênh"
              : locale === "th"
                ? "การควบคุม 1 ช่อง"
                : "1通道控制",
        locale === "ko"
          ? "간편한 설치"
          : locale === "en"
            ? "Easy Installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : locale === "th"
                ? "ติดตั้งง่าย"
                : "安装简便",
        locale === "ko"
          ? "배터리 교체 용이"
          : locale === "en"
            ? "Easy Battery Replacement"
            : locale === "vi"
              ? "Dễ dàng thay pin"
              : locale === "th"
                ? "เปลี่ยนแบตเตอรี่ง่าย"
                : "电池更换便捷",
        locale === "ko"
          ? "고급 터치 감도"
          : locale === "en"
            ? "Advanced Touch Sensitivity"
            : locale === "vi"
              ? "Độ nhạy cảm ứng nâng cao"
              : locale === "th"
                ? "ความไวในการสัมผัสขั้นสูง"
                : "高级触摸灵敏度",
      ],
    },
  ]

  // 카탈로그 다운로드 함수
  const handleDownload = (url: string, fileName: string) => {
    // 새 창에서 PDF 열기
    window.open(url, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${locale}/products/wireless-switch`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-center">
        {locale === "ko"
          ? "GUGU 스마트 무선 터치 스위치"
          : locale === "en"
            ? "GUGU Smart Wireless Touch Switch"
            : locale === "vi"
              ? "Công tắc cảm ứng không dây thông minh GUGU"
              : locale === "th"
                ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU"
                : "GUGU智能无线触摸开关"}
      </h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">
        {locale === "ko"
          ? "일반 타입 (앱 미지원 타입)"
          : locale === "en"
            ? "Standard Type (Non-App Type)"
            : locale === "vi"
              ? "Loại tiêu chuẩn (không hỗ trợ ứng dụng)"
              : locale === "th"
                ? "แบบมาตรฐาน (ไม่รองรับแอป)"
                : "标准型（非应用型）"}
      </h2>

      {/* 제품 정보 이미지 */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/images/wireless-switch/product-info-wide.png"
                alt={
                  locale === "ko"
                    ? "GUGU 무선 스위치 제품 정보"
                    : locale === "en"
                      ? "GUGU Wireless Switch Product Information"
                      : locale === "vi"
                        ? "Thông tin sản phẩm công tắc không dây GUGU"
                        : locale === "th"
                          ? "ข้อมูลผลิตภัณฑ์สวิตช์ไร้สาย GUGU"
                          : "GUGU无线开关产品信息"
                }
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
          {locale === "ko"
            ? "GUGU 스마트 무선 터치 스위치 일반 타입은 간편한 설치와 사용이 특징인 제품입니다."
            : locale === "en"
              ? "GUGU Smart Wireless Touch Switch Standard Type is a product characterized by easy installation and use."
              : locale === "vi"
                ? "Công tắc cảm ứng không dây thông minh GUGU loại tiêu chuẩn là sản phẩm đặc trưng bởi cài đặt và sử dụng dễ dàng."
                : locale === "th"
                  ? "สวิตช์ทัชไร้สายอัจฉริยะ GUGU แบบมาตรฐานเป็นผลิตภัณฑ์ที่มีลักษณะเด่นคือติดตั้งและใช้งานง่าย"
                  : "GUGU智能无线触摸开关标准型是一款以安装和使用简便为特点的产品。"}
          <br />
          {locale === "ko"
            ? "별도의 앱 설치 없이 스위치만으로 조명을 제어할 수 있어 사용이 간편합니다."
            : locale === "en"
              ? "It is easy to use as you can control the lighting with just the switch without installing a separate app."
              : locale === "vi"
                ? "Dễ dàng sử dụng vì bạn có thể điều khiển đèn chỉ với công tắc mà không cần cài đặt ứng dụng riêng biệt."
                : locale === "th"
                  ? "ใช้งานง่ายเนื่องจากคุณสามารถควบคุมแสงสว่างด้วยสวิตช์เท่านั้นโดยไม่ต้องติดตั้งแอปแยกต่างหาก"
                  : "无需安装单独的应用程序，仅通过开关即可控制照明，使用方便。"}
          <br />
          {locale === "ko"
            ? "1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다."
            : locale === "en"
              ? "It provides various options from 1 channel to 6 channels so that customers can choose according to their needs."
              : locale === "vi"
                ? "Nó cung cấp nhiều tùy chọn từ 1 kênh đến 6 kênh để khách hàng có thể lựa chọn theo nhu cầu của họ."
                : locale === "th"
                  ? "มีตัวเลือกหลากหลายตั้งแต่ 1 ช่องถึง 6 ช่องเพื่อให้ลูกค้าสามารถเลือกตามความต้องการของพวกเขา"
                  : "提供从1通道到6通道的各种选项，客户可以根据需求选择。"}
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
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div>
                <h4 className="font-semibold mb-2">
                  {locale === "ko"
                    ? "주요 특징:"
                    : locale === "en"
                      ? "Key Features:"
                      : locale === "vi"
                        ? "Tính năng chính:"
                        : locale === "th"
                          ? "คุณสมบัติหลัก:"
                          : "主要特点:"}
                </h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link href={`/${locale}/consultation?product=${encodeURIComponent(product.name)}`}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">{t.inquire}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 제품 특징 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {locale === "ko"
            ? "제품 특징"
            : locale === "en"
              ? "Product Features"
              : locale === "vi"
                ? "Tính năng sản phẩm"
                : locale === "th"
                  ? "คุณสมบัติผลิตภัณฑ์"
                  : "产品特点"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">
              {locale === "ko"
                ? "간편한 설치"
                : locale === "en"
                  ? "Easy Installation"
                  : locale === "vi"
                    ? "Dễ dàng lắp đặt"
                    : locale === "th"
                      ? "ติดตั้งง่าย"
                      : "安装简便"}
            </h3>
            <p className="text-gray-700">
              {locale === "ko"
                ? "기존 스위치 위치에 쉽게 설치할 수 있으며, 별도의 배선 공사가 필요 없어 설치 비용과 시간을 절약할 수 있습니다."
                : locale === "en"
                  ? "It can be easily installed in the position of existing switches, and no separate wiring work is required, saving installation costs and time."
                  : locale === "vi"
                    ? "Nó có thể được lắp đặt dễ dàng ở vị trí của các công tắc hiện có, và không cần công việc đi dây riêng biệt, tiết kiệm chi phí và thời gian lắp đặt."
                    : locale === "th"
                      ? "สามารถติดตั้งได้ง่ายในตำแหน่งของสวิตช์ที่มีอยู่ และไม่จำเป็นต้องมีงานเดินสายแยกต่างหาก ช่วยประหยัดค่าใช้จ่ายและเวลาในการติดตั้ง"
                      : "可以轻松安装在现有开关位置，无需单独布线工作，节省安装成本和时间。"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">
              {locale === "ko"
                ? "다양한 채널 옵션"
                : locale === "en"
                  ? "Various Channel Options"
                  : locale === "vi"
                    ? "Nhiều tùy chọn kênh"
                    : locale === "th"
                      ? "ตัวเลือกช่องที่หลากหลาย"
                      : "多种通道选项"}
            </h3>
            <p className="text-gray-700">
              {locale === "ko"
                ? "1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다."
                : locale === "en"
                  ? "It provides various options from 1 channel to 6 channels so that customers can choose according to their needs."
                  : locale === "vi"
                    ? "Nó cung cấp nhiều tùy chọn từ 1 kênh đến 6 kênh để khách hàng có thể lựa chọn theo nhu cầu của họ."
                    : locale === "th"
                      ? "มีตัวเลือกหลากหลายตั้งแต่ 1 ช่องถึง 6 ช่องเพื่อให้ลูกค้าสามารถเลือกตามความต้องการของพวกเขา"
                      : "提供从1通道到6通道的各种选项，客户可以根据需求选择。"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">
              {locale === "ko"
                ? "고급 터치 감도"
                : locale === "en"
                  ? "Advanced Touch Sensitivity"
                  : locale === "vi"
                    ? "Độ nhạy cảm ứng nâng cao"
                    : locale === "th"
                      ? "ความไวในการสัมผัสขั้นสูง"
                      : "高级触摸灵敏度"}
            </h3>
            <p className="text-gray-700">
              {locale === "ko"
                ? "정밀한 터치 감도로 가벼운 터치만으로도 작동하며, 오작동을 방지하는 기술이 적용되었습니다."
                : locale === "en"
                  ? "It operates with just a light touch with precise touch sensitivity, and technology to prevent malfunction has been applied."
                  : locale === "vi"
                    ? "Nó hoạt động chỉ với một cú chạm nhẹ với độ nhạy cảm ứng chính xác, và công nghệ để ngăn chặn sự cố đã được áp dụng."
                    : locale === "th"
                      ? "ทำงานด้วยการสัมผัสเบาๆ ด้วยความไวในการสัมผัสที่แม่นยำ และมีการใช้เทคโนโลยีเพื่อป้องกันการทำงานผิดพลาด"
                      : "采用精确的触摸灵敏度，轻触即可操作，并应用了防止误操作的技术。"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">
              {locale === "ko"
                ? "배터리 교체 용이"
                : locale === "en"
                  ? "Easy Battery Replacement"
                  : locale === "vi"
                    ? "Dễ dàng thay pin"
                    : locale === "th"
                      ? "เปลี่ยนแบตเตอรี่ง่าย"
                      : "电池更换便捷"}
            </h3>
            <p className="text-gray-700">
              {locale === "ko"
                ? "배터리 교체가 간편하며, 저전력 설계로 배터리 수명이 길어 유지 관리가 편리합니다."
                : locale === "en"
                  ? "Battery replacement is simple, and maintenance is convenient with a long battery life due to low-power design."
                  : locale === "vi"
                    ? "Thay pin đơn giản, và bảo trì thuận tiện với tuổi thọ pin dài do thiết kế tiêu thụ điện năng thấp."
                    : locale === "th"
                      ? "การเปลี่ยนแบตเตอรี่ทำได้ง่าย และการบำรุงรักษาสะดวกด้วยอายุการใช้งานแบตเตอรี่ที่ยาวนานเนื่องจากการออกแบบที่ใช้พลังงานต่ำ"
                      : "电池更换简单，低功耗设计使电池寿命更长，维护方便。"}
            </p>
          </div>
        </div>
      </div>

      {/* 카탈로그 섹션 */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {locale === "ko"
            ? "제품 카탈로그"
            : locale === "en"
              ? "Product Catalog"
              : locale === "vi"
                ? "Danh mục sản phẩm"
                : locale === "th"
                  ? "แคตตาล็อกสินค้า"
                  : "产品目录"}
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          {locale === "ko"
            ? "GUGU 무선 스위치의 상세 사양과 설치 방법이 포함된 카탈로그를 확인하세요."
            : locale === "en"
              ? "Check the catalog that includes detailed specifications and installation methods for GUGU wireless switches."
              : locale === "vi"
                ? "Kiểm tra danh mục bao gồm thông số kỹ thuật chi tiết và phương pháp lắp đặt cho công tắc không dây GUGU."
                : locale === "th"
                  ? "ตรวจสอบแคตตาล็อกที่รวมข้อมูลจำเพาะโดยละเอียดและวิธีการติดตั้งสำหรับสวิตช์ไร้สาย GUGU"
                  : "查看包含GUGU无线开关详细规格和安装方法的目录。"}
        </p>

        <Tabs defaultValue="korean" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="korean">
              {locale === "ko"
                ? "한글 카탈로그"
                : locale === "en"
                  ? "Korean Catalog"
                  : locale === "vi"
                    ? "Danh mục tiếng Hàn"
                    : locale === "th"
                      ? "แคตตาล็อกภาษาเกาหลี"
                      : "韩文目录"}
            </TabsTrigger>
            <TabsTrigger value="english">
              {locale === "ko"
                ? "영문 카탈로그"
                : locale === "en"
                  ? "English Catalog"
                  : locale === "vi"
                    ? "Danh mục tiếng Anh"
                    : locale === "th"
                      ? "แคตตาล็อกภาษาอังกฤษ"
                      : "英文目录"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="korean" className="border rounded-lg bg-white p-4 mx-auto max-w-[70%]">
            <div className="flex justify-end mb-4">
              <a
                href={koreanCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Download size={16} />
                {locale === "ko"
                  ? "카탈로그 다운로드"
                  : locale === "en"
                    ? "Download Catalog"
                    : locale === "vi"
                      ? "Tải xuống danh mục"
                      : locale === "th"
                        ? "ดาวน์โหลดแคตตาล็อก"
                        : "下载目录"}
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={`${koreanCatalogEmbedUrl}?dpi=300`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "auto" }}
              ></iframe>
            </div>
          </TabsContent>

          <TabsContent value="english" className="border rounded-lg bg-white p-4 mx-auto max-w-[70%]">
            <div className="flex justify-end mb-4">
              <a
                href={englishCatalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Download size={16} />
                {locale === "ko"
                  ? "카탈로그 다운로드"
                  : locale === "en"
                    ? "Download Catalog"
                    : locale === "vi"
                      ? "Tải xuống danh mục"
                      : locale === "th"
                        ? "ดาวน์โหลดแคตตาล็อก"
                        : "下载目录"}
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={`${englishCatalogEmbedUrl}?dpi=300`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "auto" }}
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
