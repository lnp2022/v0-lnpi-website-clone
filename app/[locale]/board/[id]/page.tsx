"use client"

import { useTranslations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, X } from "lucide-react"
import { useState } from "react"

export default function BoardDetailPage({
  params,
}: {
  params: { locale: string; id: string }
}) {
  const t = useTranslations(params.locale)
  const postId = Number.parseInt(params.id)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  // 게시글 더미 데이터 - 간소화된 버전
  const posts = [
    {
      id: 1,
      title:
        params.locale === "ko"
          ? "엘엔피-카달로그"
          : params.locale === "en"
            ? "LNP-Catalog"
            : params.locale === "vi"
              ? "LNP-Danh mục sản phẩm"
              : params.locale === "th"
                ? "LNP-แคตตาล็อก"
                : "LNP-产品目录",
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
        params.locale === "ko"
          ? "GUGU 스위치 - 카달로그"
          : params.locale === "en"
            ? "GUGU Switch - Catalog"
            : params.locale === "vi"
              ? "Công tắc GUGU - Danh mục sản phẩm"
              : params.locale === "th"
                ? "สวิตช์ GUGU - แคตตาล็อก"
                : "GUGU开关 - 产品目录",
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
        params.locale === "ko"
          ? "한방 우물 설치 가이드"
          : params.locale === "en"
            ? "Single Ceiling Installation Guide"
            : params.locale === "vi"
              ? "Hướng dẫn lắp đặt trần đơn"
              : params.locale === "th"
                ? "คู่มือการติดตั้งเพดานเดี่ยว"
                : "单体天花板安装指南",
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
        params.locale === "ko"
          ? "2025년~2026년 아파트 입주 정보"
          : params.locale === "en"
            ? "2025-2026 Apartment Move-in Information"
            : params.locale === "vi"
              ? "Thông tin chuyển vào căn hộ 2025-2026"
              : params.locale === "th"
                ? "ข้อมูลการเข้าอยู่อาศัยในอพาร์ทเมนท์ปี 2025-2026"
                : "2025-2026年公寓入住信息",
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
  ]

  // 현재 게시글 찾기
  const post = posts.find((p) => p.id === postId) || posts[0]

  // 관련 게시글 찾기 (같은 ID가 아닌 다른 게시글)
  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3)

  // 이미지 모달 열기
  const openImageModal = (imageUrl: string) => {
    setModalImage(imageUrl)
    setIsImageModalOpen(true)
  }

  // 이미지 모달 닫기
  const closeImageModal = () => {
    setIsImageModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${params.locale}/board`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {params.locale === "ko"
            ? "게시판으로 돌아가기"
            : params.locale === "en"
              ? "Back to Board"
              : params.locale === "vi"
                ? "Quay lại Bảng tin"
                : params.locale === "th"
                  ? "กลับไปที่กระดาน"
                  : "返回公告栏"}
        </Button>
      </Link>

      {/* 게시글 제목 */}
      <div className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>

      {/* 이미지 (첫 번째 이미지만 표시) */}
      {post.images && post.images.length > 0 && (
        <div className="mb-8">
          <div className="relative aspect-video bg-gray-100 w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
            <Image
              src={post.images[0] || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-contain"
              onClick={() => openImageModal(post.images[0])}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      )}

      {/* 첨부 파일 */}
      {post.files && post.files.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">
            {params.locale === "ko"
              ? "첨부 파일"
              : params.locale === "en"
                ? "Attached Files"
                : params.locale === "vi"
                  ? "Tệp đính kèm"
                  : params.locale === "th"
                    ? "ไฟล์แนบ"
                    : "附件"}
          </h3>
          <div className="space-y-2">
            {post.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                download={file.isImage ? file.name : undefined}
              >
                <FileText className="h-5 w-5 text-gray-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault()
                    // 구글 드라이브 뷰어 페이지로 직접 이동
                    const driveUrl = file.url
                    // 새 창에서 구글 드라이브 링크 열기
                    window.open(driveUrl, "_blank")
                  }}
                >
                  <Download className="h-4 w-4 mr-1" />
                  {params.locale === "ko"
                    ? "다운로드"
                    : params.locale === "en"
                      ? "Download"
                      : params.locale === "vi"
                        ? "Tải xuống"
                        : params.locale === "th"
                          ? "ดาวน์โหลด"
                          : "下载"}
                </Button>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* 이미지 모달 */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white rounded-full z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeImageModal()
              }}
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={modalImage || "/placeholder.svg"}
                alt="확대 이미지"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
