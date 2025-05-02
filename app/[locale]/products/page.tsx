"use client"

import { useTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 제품 카테고리 데이터
  const categories = [
    {
      id: "ceiling-frame",
      name: t.ceilingFrame,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001-KwP0FiZR8n7kjW9UHBsdjKmwtF575x.png",
      description: t.ceilingFrameDescription,
    },
    {
      id: "wireless-switch",
      name: t.wirelessSwitch,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002-Q1CsoFeULaU9NLS9ghvAr2O6MzR58V.png",
      description: t.wirelessSwitchDescription,
    },
    {
      id: "accessories",
      name: t.accessories,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/003-3yAUkCmwerMy3HfD61K5gOR4xkQoB6.png",
      description: t.accessoriesDescription,
    },
  ]

  // 베스트셀러 제품 데이터
  const bestSellers = [
    {
      id: 1,
      name:
        params.locale === "ko"
          ? "일반 시트지 래핑 우물 프레임"
          : params.locale === "en"
            ? "Sheet Wrapping Ceiling Frame"
            : params.locale === "vi"
              ? "Khung trần bọc tấm"
              : params.locale === "th"
                ? "เฟรมเพดานห่อแผ่น"
                : params.locale === "zh"
                  ? "贴膜天花板框架"
                  : "일반 시트지 래핑 우물 프레임",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001-OOLFB74OSScko2hn9pbnQlbp2bYCYy.png",
      description:
        params.locale === "ko"
          ? "깔끔한 디자인과 시공의 편의성을 최대화"
          : params.locale === "en"
            ? "Maximizing clean design and construction convenience"
            : params.locale === "vi"
              ? "Tối đa hóa thiết kế sạch sẽ và tiện lợi trong xây dựng"
              : params.locale === "th"
                ? "เพิ่มประสิทธิภาพการออกแบบที่สะอาดและความสะดวกในการก่อสร้าง"
                : params.locale === "zh"
                  ? "最大化简洁设计和施工便利性"
                  : "깔끔한 디자인과 시공의 편의성을 최대화",
      features: [
        params.locale === "ko"
          ? "시공의 편의성 최대화(30분 이내 시공 가능)"
          : params.locale === "en"
            ? "Maximizing construction convenience (installation possible within 30 minutes)"
            : params.locale === "vi"
              ? "Tối đa hóa tiện lợi xây dựng (có thể lắp đặt trong vòng 30 phút)"
              : params.locale === "th"
                ? "เพิ่มประสิทธิภาพความสะดวกในการก่อสร้าง (สามารถติดตั้งได้ภายใน 30 นาที)"
                : params.locale === "zh"
                  ? "最���化施工便利性（30分钟内可安装）"
                  : "시공의 편의성 최대화(30분 이내 시공 가능)",
        params.locale === "ko"
          ? "직각과 라운드 코너 마감재 선택 가능"
          : params.locale === "en"
            ? "Square and round corner finishing materials available"
            : params.locale === "vi"
              ? "Có sẵn vật liệu hoàn thiện góc vuông và tròn"
              : params.locale === "th"
                ? "มีวัสดุตกแต่งมุมฉากและมุมโค้งให้เลือก"
                : params.locale === "zh"
                  ? "可选择直角和圆角装饰材料"
                  : "직각과 라운드 코너 마감재 선택 가능",
        params.locale === "ko"
          ? "난연 PVC 재질로 화재 걱정 없음"
          : params.locale === "en"
            ? "No fire concerns with flame-retardant PVC material"
            : params.locale === "vi"
              ? "Không lo lắng về hỏa hoạn với vật liệu PVC chống cháy"
              : params.locale === "th"
                ? "ไม่ต้องกังวลเรื่องไฟไหม้ด้วยวัสดุ PVC หน่วงไฟ"
                : params.locale === "zh"
                  ? "采用阻燃PVC材料，无火灾隐患"
                  : "난연 PVC 재질로 화재 걱정 없음",
      ],
    },
    {
      id: 2,
      name:
        params.locale === "ko"
          ? "한방 우물 프레임"
          : params.locale === "en"
            ? "Single Ceiling Frame"
            : params.locale === "vi"
              ? "Khung trần đơn"
              : params.locale === "th"
                ? "เฟรมเพดานเดี่ยว"
                : params.locale === "zh"
                  ? "单体天花板框架"
                  : "한방 우물 프레임",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002-eyBARVeFGfC88CZISqcpIovM4oDEUZ.png",
      description:
        params.locale === "ko"
          ? "세련된 디자인과 T5 조명 2줄 시공 가능"
          : params.locale === "en"
            ? "Sophisticated design with dual T5 lighting installation"
            : params.locale === "vi"
              ? "Thiết kế tinh tế với lắp đặt đèn T5 kép"
              : params.locale === "th"
                ? "การออกแบบที่ทันสมัยพร้อมการติดตั้งไฟ T5 แบบคู่"
                : params.locale === "zh"
                  ? "精致设计，可安装双排T5照明"
                  : "세련된 디자인과 T5 조명 2줄 시공 가능",
      features: [
        params.locale === "ko"
          ? "1가지 타입으로 자재 재고 부담의 최소화"
          : params.locale === "en"
            ? "Minimizing material inventory burden with a single type"
            : params.locale === "vi"
              ? "Giảm thiểu gánh nặng tồn kho vật liệu với một loại duy nhất"
              : params.locale === "th"
                ? "ลดภาระสินค้าคงคลังวัสดุด้วยประเภทเดียว"
                : params.locale === "zh"
                  ? "单一类型最大限度减少材料库存负担"
                  : "1가지 타입으로 자재 재고 부담의 최소화",
        params.locale === "ko"
          ? "길이 상관 없이 중간 마감재 없이 시공 가능"
          : params.locale === "en"
            ? "Installation possible without middle finishing materials regardless of length"
            : params.locale === "vi"
              ? "Có thể lắp đặt mà không cần vật liệu hoàn thiện giữa bất kể chiều dài"
              : params.locale === "th"
                ? "สามารถติดตั้งได้โดยไม่ต้องใช้วัสดุตกแต่งตรงกลางโดยไม่คำนึงถึงความยาว"
                : params.locale === "zh"
                  ? "无论长度如何，都可以在没有中间装饰材料的情况下进行安装"
                  : "길이 상관 없이 중간 마감재 없이 시공 가능",
        params.locale === "ko"
          ? "난연 PC 재질로 화재 걱정 없음"
          : params.locale === "en"
            ? "No fire concerns with flame-retardant PC material"
            : params.locale === "vi"
              ? "Không lo lắng về hỏa hoạn với vật liệu PC chống cháy"
              : params.locale === "th"
                ? "ไม่ต้องกังวลเรื่องไฟไหม้ด้วยวัสดุ PC หน่วงไฟ"
                : params.locale === "zh"
                  ? "采用阻燃PC材料，无火灾隐患"
                  : "난연 PC 재질로 화재 걱정 없음",
      ],
    },
    {
      id: 3,
      name:
        params.locale === "ko"
          ? "GUGU 무선 스위치 - 앱 지원 타입"
          : params.locale === "en"
            ? "GUGU Wireless Switch - App Support Type"
            : params.locale === "vi"
              ? "Công tắc không dây GUGU - Loại hỗ trợ ứng dụng"
              : params.locale === "th"
                ? "สวิตช์ไร้สาย GUGU - แบบรองรับแอป"
                : params.locale === "zh"
                  ? "GUGU无线开关 - 应用支持型"
                  : "GUGU 무선 ��위치 - 앱 지원 타입",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/003-Xy2FqNrCMKkLKNyHkZIrXKfyPXPdEn.png",
      description:
        params.locale === "ko"
          ? "이질감 없는 디자인과 쉬운 설치 및 A/S"
          : params.locale === "en"
            ? "Seamless design with easy installation and service"
            : params.locale === "vi"
              ? "Thiết kế liền mạch với lắp đặt và dịch vụ dễ dàng"
              : params.locale === "th"
                ? "การออกแบบที่กลมกลืนพร้อมการติดตั้งและบริการที่ง่ายดาย"
                : params.locale === "zh"
                  ? "无缝设计，易于安装和维修"
                  : "이질감 없는 디자인과 쉬운 설치 및 A/S",
      features: [
        params.locale === "ko"
          ? "1인 가구 안심 케어 서비스 제공"
          : params.locale === "en"
            ? "Providing safety care service for single-person households"
            : params.locale === "vi"
              ? "Cung cấp dịch vụ chăm sóc an toàn cho hộ gia đình một người"
              : params.locale === "th"
                ? "ให้บริการดูแลความปลอดภัยสำหรับครัวเรือนคนเดียว"
                : params.locale === "zh"
                  ? "为单人家庭提供安心护理服务"
                  : "1인 가구 안심 케어 서비스 제공",
        params.locale === "ko"
          ? "1~6채널 까지 원하는 채널로 선택 가능"
          : params.locale === "en"
            ? "Choose from 1 to 6 channels as desired"
            : params.locale === "vi"
              ? "Lựa chọn từ 1 đến 6 kênh theo mong muốn"
              : params.locale === "th"
                ? "เลือกจาก 1 ถึง 6 ช่องตามต้องการ"
                : params.locale === "zh"
                  ? "可根据需要选择1至6个通道"
                  : "1~6채널 까지 원하는 채널로 선택 가능",
        params.locale === "ko"
          ? "컨넥터 방식으로 고객이 직접 A/S 가능"
          : params.locale === "en"
            ? "Customers can service directly with connector method"
            : params.locale === "vi"
              ? "Khách hàng có thể tự bảo dưỡng với phương pháp kết nối"
              : params.locale === "th"
                ? "ลูกค้าสามารถบริการได้โดยตรงด้วยวิธีการเชื่อมต่อ"
                : params.locale === "zh"
                  ? "客户可以通过连接器方式直接维修"
                  : "컨넥터 방식으로 고객이 직접 A/S 가능",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.allProducts}</h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">{t.productsPageDescription}</p>

      {/* 제품 카테고리 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg border bg-card text-card-foreground"
          >
            <div className="relative h-48 w-full">
              <Image
                src={
                  category.id === "ceiling-frame"
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9A%B0%EB%AC%BC%EC%B2%9C%EC%9E%A5-99EWBtEo9Jt24naSVmTdce8uzrocxE.png"
                    : category.image
                }
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
            <div className="p-6 pt-0">
              <Link href={`/${params.locale}/products/${category.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  {t.viewProducts}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 베스트셀러 제품 */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">{t.bestSellers}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg border bg-card text-card-foreground"
            >
              <div className="relative h-64 w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="p-6">
                <p className="font-semibold">
                  {params.locale === "ko"
                    ? "주요 특징"
                    : params.locale === "en"
                      ? "Key Features"
                      : params.locale === "vi"
                        ? "Tính năng chính"
                        : params.locale === "th"
                          ? "คุณสมบัติหลัก"
                          : params.locale === "zh"
                            ? "主要特点"
                            : "주요 특징"}
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/${params.locale}/consultation?product=${encodeURIComponent(product.name)}`}>
                  <Button className="w-full">{t.inquire}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
