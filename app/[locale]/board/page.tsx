"use client"

import { useTranslations } from "@/lib/translations"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { use } from "react" // 🌟 최신 엔진을 위해 추가되었습니다!

export default function BoardPage({
  params,
}: {
  params: Promise<{ locale: string }> // 🌟 최신 스타일: params를 '약속(Promise)'으로 받습니다.
}) {
  // 🌟 최신 엔진 방식: params를 안전하게 풀어줍니다.
  const resolvedParams = use(params)
  const { locale } = resolvedParams
  const t = useTranslations(locale)

  // --- 핫템뷰님이 작성하신 소중한 데이터 (100% 그대로 유지) ---
  const posts = [
    {
      id: 1,
      title:
        locale === "ko"
          ? "엘엔피-카달로그"
          : locale === "en"
            ? "LNP-Catalog"
            : locale === "vi"
              ? "LNP-Danh mục sản phẩm"
              : locale === "th"
                ? "LNP-แคต탈็อก"
                : "LNP-产品目录",
      bgColor: "bg-[#f5f2ea]",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001.jpg-icWjHi3iehfJu2jF3LFxI1yMBrIHWP.jpeg"],
      files: [
        {
          name: "엘엔피-카달로그_e_book.pdf",
          size: "4.5MB",
          url: "https://drive.google.com/file/d/1-Xy8r6r6n0AwcCbOwEG9NqqQdDjlJAuK/view?usp=sharing",
          fileId: "1-Xy8r6r6n0AwcCbOwEG9NqqQdDjlJAuK",
        },
      ],
      content: "엘엔피-카달로그",
    },
    {
      id: 2,
      title:
        locale === "ko"
          ? "GUGU 스위치 - 카달로그"
          : locale === "en"
            ? "GUGU Switch - Catalog"
            : locale === "vi"
              ? "Công tắc GUGU - Danh mục sản phẩm"
              : locale === "th"
                ? "สวิตช์ GUGU - แคตตาล็อก"
                : "GUGU开关 - 产品目录",
      bgColor: "bg-[#f5f2ea]",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j904H5t9bNNUkRMS1dlW0Ht5nJXnvU.png"],
      files: [
        {
          name: "GUGU_무선스위치_카달로그.pdf",
          size: "4.2MB",
          url: "https://drive.google.com/file/d/1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R/view?usp=sharing",
          fileId: "1Uyvr_2x6JdvdFKDH5WeUmVmtxLTBhc3R",
        },
        {
          name: "GUGU_Wireless_Switch_Catalog.pdf",
          size: "3.8MB",
          url: "https://drive.google.com/file/d/1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi/view?usp=sharing",
          fileId: "1ziDgfBdIIUBb2A5aCseRwB5VqrZkLBRi",
        },
      ],
      content: "GUGU 스마트 무선 스위치 카달로그",
    },
    {
      id: 3,
      title:
        locale === "ko"
          ? "한방 우물 설치 가이드"
          : locale === "en"
            ? "Single Ceiling Installation Guide"
            : locale === "vi"
              ? "Hướng dẫn lắp đặt trần đơn"
              : locale === "th"
                ? "คู่มือการติดตั้งเพดานเดี่ยว"
                : "单体天花板安装指南",
      bgColor: "bg-[#f5f2ea]",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PMzl8NDQH2SK7hwijo9Zfac9Lee24T.png"],
      files: [
        {
          name: "한방우물_설치가이드.pdf",
          size: "3.8MB",
          url: "https://drive.google.com/file/d/1My15GpcI8sgaLQNusmnojfIprP4ZaUw7/view?usp=sharing",
          fileId: "1My15GpcI8sgaLQNusmnojfIprP4ZaUw7",
        },
      ],
      content: "한방 우물 설치 가이드",
    },
    {
      id: 4,
      title:
        locale === "ko"
          ? "2025년~2026년 아파트 입주 정보"
          : locale === "en"
            ? "2025-2026 Apartment Move-in Information"
            : locale === "vi"
              ? "Thông tin chuyển vào căn hộ 2025-2026"
              : locale === "th"
                ? "ข้อมูลการเข้าอยู่อาศัยในอพาร์ทเมนท์ปี 2025-2026"
                : "2025-2026年公寓入住信息",
      bgColor: "bg-[#f5f2ea]",
      images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8WJFz0qPg3p82AvmALJ0cX37GPqdAN.png"],
      files: [
        {
          name: "2025-2026_아파트_입주정보.xlsx",
          size: "3.2MB",
          url: "https://docs.google.com/spreadsheets/d/16bFhFQWLRutsYEJnFmVw8RWwxdaGnH6H/edit?usp=sharing&ouid=100574393086244193432&rtpof=true&sd=true",
          fileId: "16bFhFQWLRutsYEJnFmVw8RWwxdaGnH6H",
        },
      ],
      content: "2025년~2026년 아파트 입주 정보",
    },
    {
      id: 5,
      title:
        locale === "ko"
          ? "GUGU 스위치 APK 파일 다운로드"
          : locale === "en"
            ? "GUGU Switch APK File Download"
            : locale === "vi"
              ? "Tải xuống tệp APK công tắc GUGU"
              : locale === "th"
                ? "ดาวน์โหลดไฟล์ APK สวิตช์ GUGU"
                : "GUGU开关APK文件下载",
      // 🎨 기존 카드들과 통일감을 주기 위해 같은 배경색을 사용했습니다.
      bgColor: "bg-[#f5f2ea]", 
      // 🖼️ 사진은 기존 로고 이미지를 그대로 사용하거나, public/images에 새 아이콘을 넣고 경로를 바꾸세요.
      images: [""],
      files: [
        {
          // ✅ 실제 파일 이름과 매칭하세요.
          name: "gugu_switch_v1.zip", 
          size: "4.7MB", // 실제 파일 용량으로 수정해 주세요!
          // 🔗 public/downloads 폴더에 파일을 넣으셨다면 아래 경로를 사용하세요.
          url: "/downloads/gugu_switch_v1.zip",
        },
      ],
      content: 
        locale === "ko" 
          ? "안드로이드 전용 GUGU 스위치 앱 설치 파일(ZIP 압축)" 
          : locale === "en"
            ? "GUGU Switch App Installation File for Android (ZIP)"
            : locale === "vi"
              ? "Tệp cài đặt ứng dụng công tắc GUGU cho Android (ZIP)"
              : locale === "th"
                ? "ไฟล์ติดตั้งแอปสวิตช์ GUGU สำหรับ Android (ZIP)"
                : "适用于安卓系统的GUGU开关应用安装文件 (ZIP)",
    },
    {
      id: 6,
      title:
        locale === "ko"
          ? "GUGU 올인원 스위치 설명서"
          : locale === "en"
            ? "GUGU All-in-One Switch Manual"
            : locale === "vi"
              ? "Hướng dẫn sử dụng công tắc All-in-One GUGU"
              : locale === "th"
                ? "คู่มือการใช้งานสวิตช์ GUGU ออลอินวัน"
                : "GUGU 全合一开关说明书",
      bgColor: "bg-[#f5f2ea]",
      // 🖼️ 사진은 기존의 사각형 로고를 그대로 사용하여 일관성을 높였습니다.
      images: ["/downloads/ALLINONE.jpg"],
      files: [
        {
          name: "ALLINONE_MANUAL.pdf",
          size: "5.58MB", // 실제 파일 용량에 맞춰 수정해 주세요!
          // 🔗 사진 속 downloads 폴더 내 파일명과 정확히 매칭했습니다.
          url: "/downloads/ALLINONE_MANUAL.pdf",
        },
      ],
      content:
        locale === "ko"
          ? "GUGU 올인원 스위치 상세 사용 및 설치 설명서"
          : locale === "en"
            ? "Detailed manual for GUGU All-in-One Switch use and installation"
            : locale === "vi"
              ? "Hướng dẫn chi tiết về cách sử dụng và lắp đặt công tắc All-in-One GUGU"
              : locale === "th"
                ? "คู่มือการใช้งานและการติดตั้งสวิตช์ GUGU ออลอินวันอย่างละเอียด"
                : "GUGU 全合一开关详细使用及安装说明书",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 핫템뷰님이 만드신 헤더 영역 (그대로 유지) */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {locale === "ko" ? "주식회사 엘엔피의" : locale === "en" ? "LNP Corporation's" : locale === "vi" ? "Của Công ty LNP" : locale === "th" ? "ของบริษัท LNP" : "LNP公司的"}
          <br />
          <span className="text-orange-500">
            {locale === "ko" ? "각종 자료를 다운 받을 수 있는 공간 입니다." : locale === "en" ? "space where you can download various materials." : locale === "vi" ? "không gian nơi bạn có thể tải xuống các tài liệu khác nhau." : locale === "th" ? "พื้นที่ที่คุณสามารถดาวน์โหลดเอกสารต่างๆ ได้" : "可以下载各种资料的空间。"}
          </span>
        </h1>
        <p className="text-gray-600 mt-4">
          {locale === "ko" ? "게시판에 없는 자료 중 궁금 하신 부분은" : locale === "en" ? "If you have any questions about materials not on the board," : locale === "vi" ? "Nếu bạn có bất kỳ câu hỏi nào về tài liệu không có trên bảng," : locale === "th" ? "หากคุณมีคำถามเกี่ยวกับเอกสารที่ไม่มีในกระดาน" : "如果您对板上没有의资料有任何疑问，"}
          <br />
          {locale === "ko" ? "문의 하기 게시판을 이용하시면 빠르게 대응해 드리도록 하겠습니다." : locale === "en" ? "please use the inquiry board and we will respond quickly." : locale === "vi" ? "vui lòng sử dụng bảng yêu cầu và chúng tôi sẽ phản hồi nhanh chóng." : locale === "th" ? "โปรดใช้กระดานสอบถามและเราจะตอบกลับอย่างรวดเร็ว" : "请使用咨询板块，我们将快速回应。"}
        </p>
      </div>

      {/* 핫템뷰님이 만드신 예쁜 카드 그리드 (그대로 유지) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/${locale}/board/${post.id}`}>
            <Card className="h-[300px] w-[300px] overflow-hidden hover:shadow-md transition-shadow border-none mx-auto relative">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%94%84%EB%A0%88%EC%9E%84-%EB%A7%88%EA%B0%90%EC%9E%AC-028%20%281%29-EH9fmVErhF0Q5KUfwJf3EKH3Wi3TBL.png')`,
                }}
              ></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white/80 p-3 rounded-b-md">
                    <h3 className="font-bold text-lg line-clamp-2">{post.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}