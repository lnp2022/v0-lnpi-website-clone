"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AccessoriesPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [activeCategory, setActiveCategory] = useState("all")

  // 기타 자재 서브 카테고리
  const categories = [
    {
      id: "all",
      name:
        params.locale === "ko"
          ? "전체 제품"
          : params.locale === "en"
            ? "All Products"
            : params.locale === "vi"
              ? "Tất cả sản phẩm"
              : params.locale === "th"
                ? "สินค้าทั้งหมด"
                : "所有产品",
    },
    {
      id: "3m-tape",
      name:
        params.locale === "ko"
          ? "3M 양면 테이프"
          : params.locale === "en"
            ? "3M Double-sided Tape"
            : params.locale === "vi"
              ? "Băng keo hai mặt 3M"
              : params.locale === "th"
                ? "เทป 3M สองหน้า"
                : "3M双面胶带",
    },
    {
      id: "cushion-tape",
      name:
        params.locale === "ko"
          ? "블랙 쿠션 테이프"
          : params.locale === "en"
            ? "Black Cushion Tape"
            : params.locale === "vi"
              ? "Băng keo đệm đen"
              : params.locale === "th"
                ? "เทปรองสีดำ"
                : "黑色缓冲胶带",
    },
  ]

  // 제품 데이터
  const products = [
    {
      id: 1,
      name:
        params.locale === "ko"
          ? "3M 양면 테이프 - (1롤-20미터)"
          : params.locale === "en"
            ? "3M Double-sided Tape - (1 Roll-20 meters)"
            : params.locale === "vi"
              ? "Băng keo hai mặt 3M - (1 cuộn-20 mét)"
              : params.locale === "th"
                ? "เทป 3M สองหน้า - (1 ม้วน-20 เมตร)"
                : "3M双面胶带 - (1卷-20米)",
      description:
        params.locale === "ko"
          ? "우물천장 프레임 시공에 최적화된 고강도 양면 테이프"
          : params.locale === "en"
            ? "High-strength double-sided tape optimized for ceiling frame construction"
            : params.locale === "vi"
              ? "Băng keo hai mặt cường độ cao được tối ưu hóa cho việc lắp đặt khung trần"
              : params.locale === "th"
                ? "เทปสองหน้าความแข็งแรงสูงที่เหมาะสำหรับการก่อสร้างเฟรมเพดาน"
                : "针对天花板框架施工优化的高强度双面胶带",
      category: "3m-tape",
      image: "/images/accessories/001.png",
      features: [
        params.locale === "ko"
          ? "강력한 접착력으로 안정적인 시공 가능"
          : params.locale === "en"
            ? "Stable construction with strong adhesion"
            : params.locale === "vi"
              ? "Có thể xây dựng ổn định với độ bám dính mạnh"
              : params.locale === "th"
                ? "การก่อสร้างที่มั่นคงด้วยการยึดเกาะที่แข็งแรง"
                : "强力粘合，稳定施工",

        params.locale === "ko"
          ? "다양한 표면에 사용 가능"
          : params.locale === "en"
            ? "Can be used on various surfaces"
            : params.locale === "vi"
              ? "Có thể sử dụng trên nhiều bề mặt khác nhau"
              : params.locale === "th"
                ? "สามารถใช้ได้กับพื้นผิวที่หลากหลาย"
                : "可用于各种表面",

        params.locale === "ko"
          ? "내구성이 뛰어나 오랜 시간 유지"
          : params.locale === "en"
            ? "Excellent durability for long-lasting maintenance"
            : params.locale === "vi"
              ? "Độ bền xuất sắc để bảo trì lâu dài"
              : params.locale === "th"
                ? "ความทนทานที่ยอดเยี่ยมสำหรับการบำรุงรักษาที่ยาวนาน"
                : "耐久性优异，长时间保持",

        params.locale === "ko"
          ? "시공이 간편하고 빠름"
          : params.locale === "en"
            ? "Easy and quick installation"
            : params.locale === "vi"
              ? "Lắp đặt dễ dàng và nhanh chóng"
              : params.locale === "th"
                ? "การติดตั้งง่ายและรวดเร็ว"
                : "施工简便快捷",
      ],
    },
    {
      id: 2,
      name:
        params.locale === "ko"
          ? "블랙 쿠션 테이프 - (1롤-30미터)"
          : params.locale === "en"
            ? "Black Cushion Tape - (1 Roll-30 meters)"
            : params.locale === "vi"
              ? "Băng keo đệm đen - (1 cuộn-30 mét)"
              : params.locale === "th"
                ? "เทปรองสีดำ - (1 ม้วน-30 เมตร)"
                : "黑色缓冲胶带 - (1卷-30米)",
      description:
        params.locale === "ko"
          ? "마감재와 프레임 사이 간격을 메우는 특수 쿠션 테이프"
          : params.locale === "en"
            ? "Special cushion tape that fills the gap between finishing material and frame"
            : params.locale === "vi"
              ? "Băng keo đệm đặc biệt lấp đầy khoảng trống giữa vật liệu hoàn thiện và khung"
              : params.locale === "th"
                ? "เทปรองพิเศษที่เติมช่องว่างระหว่างวัสดุตกแต่งและเฟรม"
                : "填充装饰材料与框架之间间隙的特殊缓冲胶带",
      category: "cushion-tape",
      image: "/images/accessories/002.png",
      features: [
        params.locale === "ko"
          ? "빛 샘 방지 효과"
          : params.locale === "en"
            ? "Light leakage prevention effect"
            : params.locale === "vi"
              ? "Hiệu quả ngăn rò rỉ ánh sáng"
              : params.locale === "th"
                ? "ผลป้องกันการรั่วไหลของแสง"
                : "防光泄漏效果",

        params.locale === "ko"
          ? "다양한 표면에 사용 가능"
          : params.locale === "en"
            ? "Can be used on various surfaces"
            : params.locale === "vi"
              ? "Có thể sử dụng trên nhiều bề mặt khác nhau"
              : params.locale === "th"
                ? "สามารถใช้ได้กับพื้นผิวที่หลากหลาย"
                : "可用于各种表面",

        params.locale === "ko"
          ? "내열성이 우수하여 LED 조명에 적합"
          : params.locale === "en"
            ? "Excellent heat resistance suitable for LED lighting"
            : params.locale === "vi"
              ? "Khả năng chịu nhiệt tuyệt vời phù hợp cho đèn LED"
              : params.locale === "th"
                ? "ความต้านทานความร้อนที่ยอดเยี่ยมเหมาะสำหรับไฟ LED"
                : "耐热性优异，适合LED照明",

        params.locale === "ko"
          ? "쉽게 잘리고 부착이 간편함"
          : params.locale === "en"
            ? "Easy to cut and attach"
            : params.locale === "vi"
              ? "Dễ dàng cắt và gắn"
              : params.locale === "th"
                ? "ง่ายต่อการตัดและติด"
                : "易于切割和粘贴",
      ],
    },
  ]

  // 현재 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* 히어로 배너 */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/images/accessories/main.png" alt="기타 자재" fill className="object-contain" />
      </div>

      {/* 설명글 */}
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-gray-700 italic">
          {params.locale === "ko"
            ? "3M 양면 테이프 & 블랙 쿠션 테이프는 선택 사항 입니다. 고객님의 시공 방법에 따라 강력 접착재 또는 실리콘 처리 등으로 대체 가능 합니다."
            : params.locale === "en"
              ? "3M double-sided tape & black cushion tape are optional. They can be replaced with strong adhesives or silicone treatment depending on your construction method."
              : params.locale === "vi"
                ? "Băng keo hai mặt 3M & băng keo đệm đen là tùy chọn. Chúng có thể được thay thế bằng keo dính mạnh hoặc xử lý silicon tùy thuộc vào phương pháp xây dựng của bạn."
                : params.locale === "th"
                  ? "เทป 3M สองหน้าและเทปรองสีดำเป็นตัวเลือก สามารถแทนที่ด้วยกาวแรงหรือการเคลือบซิลิโคนขึ้นอยู่กับวิธีการก่อสร้างของคุณ"
                  : "3M双面胶带和黑色缓冲胶带是可选的。根据您的施工方法，可以用强力粘合剂或硅胶处理代替。"}
        </p>
      </div>

      {/* 서브 카테고리 네비게이션 */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-sm md:text-base px-1 py-2 border-b-2 transition-colors ${
                  activeCategory === category.id
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 제품 그리드 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
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
      </div>

      {/* 제품 설명 섹션 */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {params.locale === "ko"
              ? "기타 자재 소개"
              : params.locale === "en"
                ? "Introduction to Accessories"
                : params.locale === "vi"
                  ? "Giới thiệu về phụ kiện"
                  : params.locale === "th"
                    ? "แนะนำอุปกรณ์เสริม"
                    : "配件介绍"}
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              {params.locale === "ko"
                ? "주식회사 엘엔피는 우물천장 프레임과 무선 스위치 외에도 시공에 필요한 다양한 기타 자재를 제공하고 있습니다. 고품질의 3M 양면 테이프와 블랙 쿠션 테이프는 우물천장 프레임 시공의 완성도를 높이는 필수 자재입니다."
                : params.locale === "en"
                  ? "LNP Corporation provides various accessories needed for construction in addition to ceiling frames and wireless switches. High-quality 3M double-sided tape and black cushion tape are essential materials that enhance the completeness of ceiling frame construction."
                  : params.locale === "vi"
                    ? "Công ty LNP cung cấp nhiều phụ kiện cần thiết cho việc xây dựng ngoài khung trần và công tắc không dây. Băng keo hai mặt 3M chất lượng cao và băng keo đệm đen là vật liệu thiết yếu nâng cao sự hoàn thiện của việc xây dựng khung trần."
                    : params.locale === "th"
                      ? "บริษัท LNP จัดหาอุปกรณ์เสริมต่างๆ ที่จำเป็นสำหรับการก่อสร้างนอกเหนือจากเฟรมเพดานและสวิตช์ไร้สาย เทป 3M สองหน้าคุณภาพสูงและเทปรองสีดำเป็นวัสดุสำคัญที่เพิ่มความสมบูรณ์ของการก่อสร้างเฟรมเพดาน"
                      : "LNP公司除了天花板框架和无线开关外，还提供各种施工所需的配件。高质量的3M双面胶带和黑色缓冲胶带是提高天花板框架施工完整性的必要材料。"}
            </p>
            <p className="mb-4">
              {params.locale === "ko"
                ? "3M 양면 테이프는 강력한 접착력으로 마감재를 천장에 안정적으로 고정시켜 주며, 블랙 쿠션 테이프는 마감재와 프레임 사이의 간격을 메워 빛 샘을 방지하고 깔끔한 마감을 가능하게 합니다."
                : params.locale === "en"
                  ? "3M double-sided tape securely fixes finishing materials to the ceiling with strong adhesion, and black cushion tape fills the gap between finishing materials and frames to prevent light leakage and enable clean finishing."
                  : params.locale === "vi"
                    ? "Băng keo hai mặt 3M cố định chắc chắn vật liệu hoàn thiện vào trần nhà với độ bám dính mạnh, và băng keo đệm đen lấp đầy khoảng trống giữa vật liệu hoàn thiện và khung để ngăn rò rỉ ánh sáng và cho phép hoàn thiện sạch sẽ."
                    : params.locale === "th"
                      ? "เทป 3M สองหน้ายึดวัสดุตกแต่งกับเพดานอย่างมั่นคงด้วยการยึดเกาะที่แข็งแรง และเทปรองสีดำเติมช่องว่างระหว่างวัสดุตกแต่งและเฟรมเพื่อป้องกันการรั่วไหลของแสงและช่วยให้การตกแต่งสะอาดเรียบร้อย"
                      : "3M双面胶带以强力粘合力将装饰材料牢固地固定在天花板上，而黑色缓冲胶带则填充装饰材料与框架之间的间隙，防止光泄漏并实现整洁的装饰效果。"}
            </p>
            <p>
              {params.locale === "ko"
                ? "모든 자재는 엄격한 품질 관리를 통해 선별된 제품으로, 시공의 편의성과 내구성을 모두 고려하여 선정되었습니다. 자재에 대한 자세한 정보나 구매 문의는 문의하기 버튼을 통해 연락 주시기 바랍니다."
                : params.locale === "en"
                  ? "All materials are selected products through strict quality control, chosen considering both construction convenience and durability. For detailed information about materials or purchase inquiries, please contact us through the inquiry button."
                  : params.locale === "vi"
                    ? "Tất cả vật liệu là sản phẩm được lựa chọn thông qua kiểm soát chất lượng nghiêm ngặt, được chọn xem xét cả sự thuận tiện xây dựng và độ bền. Để biết thông tin chi tiết về vật liệu hoặc yêu cầu mua hàng, vui lòng liên hệ với chúng tôi thông qua nút yêu cầu."
                    : params.locale === "th"
                      ? "วัสดุทั้งหมดเป็นผลิตภัณฑ์ที่ผ่านการคัดเลือกผ่านการควบคุมคุณภาพที่เข้มงวด โดยพิจารณาทั้งความสะดวกในการก่อสร้างและความทนทาน สำหรับข้อมูลโดยละเอียดเกี่ยวกับวัสดุหรือการสอบถามการซื้อ โปรดติดต่อเราผ่านปุ่มสอบถาม"
                      : "所有材料都是通过严格质量控制选择的产品，考虑了施工便利性和耐久性。有关材料的详细信息或购买咨询，请通过咨询按钮与我们联系。"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
