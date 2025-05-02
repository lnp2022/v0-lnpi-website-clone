import type React from "react"
import { redirect } from "next/navigation"

// 실제 구현에서는 세션 또는 쿠키를 확인하여 관리자 인증을 수행해야 합니다
const isAdmin = true // 임시 플래그, 실제 구현에서는 인증 로직으로 대체

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 관리자가 아닌 경우 홈페이지로 리다이렉트
  if (!isAdmin) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        관리자 모드 - 이 페이지는 관리자만 접근할 수 있습니다
      </div>
      {children}
    </div>
  )
}
