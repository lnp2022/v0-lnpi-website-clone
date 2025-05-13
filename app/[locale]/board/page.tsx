"use client"

import { useTranslations } from "@/lib/translations"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function BoardPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 게시글 더미 데이터 - 간소화된 버전
  const posts = [
    {
      id: 1,
      title: "엘엔피-카달로그",
      bgColor: "bg-[#f5f2ea]", // 베이지색 배경
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
      title: "GUGU 스위치 - 카달로그",
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
      title: "한방 우물 설치 가이드",
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
      title: "2025년~2026년 아파트 입주 정보",
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
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 게시판 헤더 */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          주식회사 엘엔피의
          <br />
          <span className="text-orange-500">각종 자료를 다운 받을 수 있는 공간 입니다.</span>
        </h1>
        <p className="text-gray-600 mt-4">
          게시판에 없는 자료 중 궁금 하신 부분은
          <br />
          문의 하기 게시판을 이용하시면 빠르게 대응해 드리도록 하겠습니다.
        </p>
      </div>

      {/* 게시글 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/${params.locale}/board/${post.id}`}>
            <Card className="h-[300px] w-[300px] overflow-hidden hover:shadow-md transition-shadow border-none mx-auto relative">
              {/* 전체 배경 이미지 */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%94%84%EB%A0%88%EC%9E%84-%EB%A7%88%EA%B0%90%EC%9E%AC-028%20%281%29-EH9fmVErhF0Q5KUfwJf3EKH3Wi3TBL.png')`,
                }}
              ></div>

              {/* 카테고리와 아이콘 */}
              <div className="relative p-6 h-full flex flex-col">
                {/* 제목 - 이미지 하단에 표시 */}
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
