import { redirect } from "next/navigation"

export default function Home() {
  // 기본 로케일로 리다이렉트
  redirect("/ko")
}
