import type React from "react"

// ✅ 1. async를 추가했습니다.
export default async function WirelessSwitchLayout({
  children,
  params,
}: {
  children: React.ReactNode
  // ✅ 2. params를 Promise로 감싸주었습니다.
  params: Promise<{ locale: string }>
}) {
  // ✅ 3. 언어 설정을 안전하게 가져오는 줄을 추가했습니다.
  const { locale } = await params

  return <div>{children}</div>
}