"use client"
import { usePathname } from "next/navigation"

interface ProductSubmenuProps {
  locale: string
}

export default function ProductSubmenu({ locale }: ProductSubmenuProps) {
  const pathname = usePathname()

  const submenuItems = [
    { href: `/${locale}/products/ceiling-frame`, label: "우물천장 프레임" },
    { href: `/${locale}/products/wireless-switch`, label: "무선 스위치" },
    { href: `/${locale}/products/accessories`, label: "액세서리" },
  ]

  // 서브메뉴를 제거하고 아무것도 렌더링하지 않음
  return null
}
