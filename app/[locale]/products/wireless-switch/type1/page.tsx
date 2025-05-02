"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StandardWirelessSwitchPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [isDownloading, setIsDownloading] = useState(false)

  // Google Drive PDF URLs
  const koreanCatalogUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/view?usp=sharing"
  const englishCatalogUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/view?usp=sharing"
  // Embedding URLs for iframes
  const koreanCatalogEmbedUrl = "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/preview"
  const englishCatalogEmbedUrl = "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/preview"

  // Product data
  const products = [
    {
      id: 1,
      image: "/images/wireless-switch-standard/001.png",
      channels: 6,
    },
    {
      id: 2,
      image: "/images/wireless-switch-standard/002.png",
      channels: 5,
    },
    {
      id: 3,
      image: "/images/wireless-switch-standard/003.png",
      channels: 4,
    },
    {
      id: 4,
      image: "/images/wireless-switch-standard/004.png",
      channels: 3,
    },
    {
      id: 5,
      image: "/images/wireless-switch-standard/005.png",
      channels: 2,
    },
    {
      id: 6,
      image: "/images/wireless-switch-standard/006.png",
      channels: 1,
    },
  ]

  // Get product name based on locale and channels
  const getProductName = (channels: number) => {
    switch (params.locale) {
      case "ko":
        return `GUGU 일반 무선 터치 스위치 ${channels}채널`
      case "en":
        return `GUGU Standard Wireless Touch Switch ${channels} Channel`
      case "vi":
        return `Công tắc cảm ứng không dây tiêu chuẩn GUGU ${channels} kênh`
      case "th":
        return `สวิตช์สัมผัสไร้สายมาตรฐาน GUGU ${channels} ช่อง`
      case "zh":
        return `GUGU标准无线触摸开关${channels}通道`
      default:
        return `GUGU Wireless Switch ${channels} Channel`
    }
  }

  // Get product description based on locale and channels
  const getProductDescription = (channels: number) => {
    switch (params.locale) {
      case "ko":
        return channels === 1
          ? "1개의 채널을 제공하는 심플한 무선 스위치"
          : `${channels}개의 독립적인 채널을 제공하는 무선 스위치`
      case "en":
        return channels === 1
          ? "Simple wireless switch providing 1 channel"
          : `Wireless switch providing ${channels} independent channels`
      case "vi":
        return channels === 1
          ? "Công tắc không dây đơn giản cung cấp 1 kênh"
          : `Công tắc không dây cung cấp ${channels} kênh độc lập`
      case "th":
        return channels === 1 ? "สวิตช์ไร้สายแบบเรียบง่ายที่มี 1 ช่อง" : `สวิตช์ไร้สายที่มี ${channels} ช่องอิสระ`
      case "zh":
        return channels === 1 ? "提供1个通道的简单无线开关" : `提供${channels}个独立通道的无线开关`
      default:
        return `Wireless switch with ${channels} ${channels === 1 ? "channel" : "channels"}`
    }
  }

  // Get product features based on locale and channels
  const getProductFeatures = (channels: number) => {
    const features = []

    // Channel control feature
    switch (params.locale) {
      case "ko":
        features.push(channels === 1 ? "1채널 제어" : `${channels}채널 독립 제어`)
        features.push("간편한 설치", "배터리 교체 용이", "고급 터치 감도")
        break
      case "en":
        features.push(channels === 1 ? "1 channel control" : `${channels} channel independent control`)
        features.push("Easy installation", "Easy battery replacement", "Advanced touch sensitivity")
        break
      case "vi":
        features.push(channels === 1 ? "Điều khiển 1 kênh" : `Điều khiển độc lập ${channels} kênh`)
        features.push("Lắp đặt dễ dàng", "Thay pin dễ dàng", "Độ nhạy cảm ứng cao cấp")
        break
      case "th":
        features.push(channels === 1 ? "ควบคุม 1 ช่อง" : `ควบคุมอิสระ ${channels} ช่อง`)
        features.push("ติดตั้งง่าย", "เปลี่ยนแบตเตอรี่ง่าย", "ความไวในการสัมผัสขั้นสูง")
        break
      case "zh":
        features.push(channels === 1 ? "1通道控制" : `${channels}通道独立控制`)
        features.push("简易安装", "电池更换方便", "高级触摸灵敏度")
        break
      default:
        features.push(`${channels} channel control`)
        features.push("Easy installation", "Easy battery replacement", "Touch sensitivity")
    }

    return features
  }

  // Get section titles based on locale
  const getSectionTitle = (key: string) => {
    const titles = {
      productFeatures: {
        ko: "제품 특징",
        en: "Product Features",
        vi: "Tính năng sản phẩm",
        th: "คุณสมบัติผลิตภัณฑ์",
        zh: "产品特点",
        default: "Product Features",
      },
      easyInstallation: {
        ko: "간편한 설치",
        en: "Easy Installation",
        vi: "Lắp đặt dễ dàng",
        th: "ติดตั้งง่าย",
        zh: "简易安装",
        default: "Easy Installation",
      },
      channelOptions: {
        ko: "다양한 채널 옵션",
        en: "Various Channel Options",
        vi: "Nhiều tùy chọn kênh",
        th: "ตัวเลือกช่องหลากหลาย",
        zh: "多种通道选项",
        default: "Channel Options",
      },
      touchSensitivity: {
        ko: "고급 터치 감도",
        en: "Advanced Touch Sensitivity",
        vi: "Độ nhạy cảm ứng cao cấp",
        th: "ความไวในการสัมผัสขั้นสูง",
        zh: "高级触摸灵敏度",
        default: "Touch Sensitivity",
      },
      batteryReplacement: {
        ko: "배터리 교체 용이",
        en: "Easy Battery Replacement",
        vi: "Thay pin dễ dàng",
        th: "เปลี่ยนแบตเตอรี่ง่าย",
        zh: "电池更换方便",
        default: "Battery Replacement",
      },
      productCatalog: {
        ko: "제품 카탈로그",
        en: "Product Catalog",
        vi: "Danh mục sản phẩm",
        th: "แคตตาล็อกสินค้า",
        zh: "产品目录",
        default: "Product Catalog",
      },
      koreanCatalog: {
        ko: "한글 카탈로그",
        en: "Korean Catalog",
        vi: "Danh mục tiếng Hàn",
        th: "แคตตาล็อกภาษาเกาหลี",
        zh: "韩文目录",
        default: "Korean Catalog",
      },
      englishCatalog: {
        ko: "영문 카탈로그",
        en: "English Catalog",
        vi: "Danh mục tiếng Anh",
        th: "แคตตาล็อกภาษาอังกฤษ",
        zh: "英文目录",
        default: "English Catalog",
      },
      downloadCatalog: {
        ko: "카탈로그 다운로드",
        en: "Download Catalog",
        vi: "Tải xuống danh mục",
        th: "ดาวน์โหลดแคตตาล็อก",
        zh: "下载目录",
        default: "Download Catalog",
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

  // Get section descriptions based on locale
  const getSectionDescription = (key: string) => {
    const descriptions = {
      mainDescription: {
        ko: "GUGU 스마트 무선 터치 스위치 일반 타입은 간편한 설치와 사용이 특징인 제품입니다. 별도의 앱 설치 없이 스위치만으로 조명을 제어할 수 있어 사용이 간편합니다. 1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.",
        en: "GUGU Smart Wireless Touch Switch Standard Type is characterized by easy installation and use. It is easy to use as it can control lighting with just a switch without installing a separate app. It provides various options from 1 channel to 6 channels so that customers can choose according to their needs.",
        vi: "Công tắc cảm ứng không dây thông minh GUGU loại tiêu chuẩn có đặc điểm là dễ dàng lắp đặt và sử dụng. Dễ dàng sử dụng vì có thể điều khiển đèn chỉ bằng công tắc mà không cần cài đặt ứng dụng riêng. Cung cấp nhiều tùy chọn từ 1 kênh đến 6 kênh để khách hàng có thể lựa chọn theo nhu cầu.",
        th: "สวิตช์สัมผัสไร้สายอัจฉริยะ GUGU แบบมาตรฐานมีลักษณะเด่นคือติดตั้งและใช้งานง่าย ใช้งานง่ายเพราะสามารถควบคุมแสงสว่างด้วยสวิตช์เท่านั้นโดยไม่ต้องติดตั้งแอปแยกต่างหาก มีตัวเลือกหลากหลายตั้งแต่ 1 ช่องถึง 6 ช่องเพื่อให้ลูกค้าสามารถเลือกได้ตามความต้องการ",
        zh: "GUGU智能无线触摸开关标准型的特点是安装和使用简便。无需安装单独的应用程序，只需通过开关即可控制照明，使用方便。提供从1通道到6通道的各种选项，客户可以根据需求选择。",
        default:
          "This wireless switch is easy to install and use. Control your lighting with just a switch, no app required. Available in 1 to 6 channels to meet your specific needs.",
      },
      easyInstallation: {
        ko: "기존 스위치 위치에 쉽게 설치할 수 있으며, 별도의 배선 공사가 필요 없어 설치 비용과 시간을 절약할 수 있습니다.",
        en: "It can be easily installed in the position of existing switches, and no separate wiring work is required, saving installation costs and time.",
        vi: "Có thể dễ dàng lắp đặt ở vị trí công tắc hiện có và không cần công việc đi dây riêng biệt, tiết kiệm chi phí và thời gian lắp đặt.",
        th: "สามารถติดตั้งได้ง่ายในตำแหน่งของสวิตช์ที่มีอยู่ และไม่จำเป็นต้องเดินสายไฟแยกต่างหาก ช่วยประหยัดค่าใช้จ่ายและเวลาในการติดตั้ง",
        zh: "可以轻松安装在现有开关位置，无需单独布线工作，节省安装成本和时间。",
        default: "Easy to install in place of existing switches. No additional wiring required, saving time and money.",
      },
      channelOptions: {
        ko: "1채널부터 6채널까지 다양한 옵션을 제공하여 고객의 필요에 맞게 선택할 수 있습니다.",
        en: "It provides various options from 1 channel to 6 channels so that customers can choose according to their needs.",
        vi: "Cung cấp nhiều tùy chọn từ 1 kênh đến 6 kênh để khách hàng có thể lựa chọn theo nhu cầu.",
        th: "มีตัวเลือกหลากหลายตั้งแต่ 1 ช่องถึง 6 ช่องเพื่อให้ลูกค้าสามารถเลือกได้ตามความต้องการ",
        zh: "提供从1通道到6通道的各种选项，客户可以根据需求选择。",
        default: "Available in 1 to 6 channels to meet your specific needs.",
      },
      touchSensitivity: {
        ko: "정밀한 터치 감도로 가벼운 터치만으로도 작동하며, 오작동을 방지하는 기술이 적용되었습니다.",
        en: "It operates with just a light touch with precise touch sensitivity, and technology to prevent malfunction has been applied.",
        vi: "Hoạt động chỉ với một cú chạm nhẹ với độ nhạy cảm ứng chính xác và đã áp dụng công nghệ để ngăn ngừa sự cố.",
        th: "ทำงานด้วยการสัมผัสเบาๆ ด้วยความไวในการสัมผัสที่แม่นยำ และมีการใช้เทคโนโลยีเพื่อป้องกันการทำงานผิดพลาด",
        zh: "精确的触摸灵敏度使其只需轻触即可操作，并应用了防止误操作的技术。",
        default: "Operates with a light touch. Features technology to prevent accidental activation.",
      },
      batteryReplacement: {
        ko: "배터리 교체가 간편하며, 저전력 설계로 배터리 수명이 길어 유지 관리가 편리합니다.",
        en: "Battery replacement is simple, and the low-power design extends battery life, making maintenance convenient.",
        vi: "Việc thay pin đơn giản và thiết kế tiết kiệm năng lượng kéo dài tuổi thọ pin, giúp bảo trì thuận tiện.",
        th: "การเปลี่ยนแบตเตอรี่ทำได้ง่าย และการออกแบบพลังงานต่ำช่วยยืดอายุแบตเตอรี่ ทำให้การบำรุงรักษาสะดวก",
        zh: "电池更换简单，低功耗设计延长电池寿命，使维护方便。",
        default: "Easy battery replacement. Low power design for extended battery life.",
      },
      catalogDesc: {
        ko: "GUGU 무선 스위치의 상세 사양과 설치 방법이 포함된 카탈로그를 확인하세요.",
        en: "Check the catalog that includes detailed specifications and installation methods for GUGU wireless switches.",
        vi: "Kiểm tra danh mục bao gồm thông số kỹ thuật chi tiết và phương pháp lắp đặt cho công tắc không dây GUGU.",
        th: "ตรวจสอบแคตตาล็อกที่รวมข้อมูลจำเพาะโดยละเอียดและวิธีการติดตั้งสำหรับสวิตช์ไร้สาย GUGU",
        zh: "查看包含GUGU无线开关详细规格和安装方法的目录。",
        default: "View our catalog for detailed specifications and installation instructions.",
      },
    }

    const locale = params.locale as keyof (typeof descriptions)[typeof key]
    return (
      descriptions[key as keyof typeof descriptions][locale] || descriptions[key as keyof typeof descriptions].default
    )
  }

  // Get page title based on locale
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

  // Get page subtitle based on locale
  const getPageSubtitle = () => {
    switch (params.locale) {
      case "ko":
        return "일반 타입 (앱 미지원 타입)"
      case "en":
        return "Standard Type (Non-App Type)"
      case "vi":
        return "Loại tiêu chuẩn (không hỗ trợ ứng dụng)"
      case "th":
        return "แบบมาตรฐาน (ไม่รองรับแอป)"
      case "zh":
        return "标准型（非应用型）"
      default:
        return "Standard Type"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <Link href={`/${params.locale}/products/wireless-switch`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-center">{getPageTitle()}</h1>
      <h2 className="text-xl text-gray-600 mb-8 text-center">{getPageSubtitle()}</h2>

      {/* Product info image */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="relative" style={{ height: "600px" }}>
              <Image
                src="/images/wireless-switch/product-info-wide.png"
                alt="GUGU Wireless Switch Product Info"
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

      {/* Product grid */}
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
              <h3 className="text-xl font-bold mb-2">{getProductName(product.channels)}</h3>
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

      {/* Product features section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{getSectionTitle("productFeatures")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("easyInstallation")}</h3>
            <p className="text-gray-700">{getSectionDescription("easyInstallation")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("channelOptions")}</h3>
            <p className="text-gray-700">{getSectionDescription("channelOptions")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("touchSensitivity")}</h3>
            <p className="text-gray-700">{getSectionDescription("touchSensitivity")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{getSectionTitle("batteryReplacement")}</h3>
            <p className="text-gray-700">{getSectionDescription("batteryReplacement")}</p>
          </div>
        </div>
      </div>

      {/* Catalog section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">{getSectionTitle("productCatalog")}</h2>
        <p className="text-gray-700 mb-6 text-center">{getSectionDescription("catalogDesc")}</p>

        <Tabs defaultValue="korean" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="korean">{getSectionTitle("koreanCatalog")}</TabsTrigger>
            <TabsTrigger value="english">{getSectionTitle("englishCatalog")}</TabsTrigger>
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
                {getSectionTitle("downloadCatalog")}
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={koreanCatalogEmbedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "high-quality" }}
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
                {getSectionTitle("downloadCatalog")}
              </a>
            </div>
            <div className="w-full h-[600px] border rounded overflow-auto">
              <iframe
                src={englishCatalogEmbedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ transform: "scale(1)", transformOrigin: "center", imageRendering: "high-quality" }}
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
