"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"
import { useTranslations } from "@/lib/translations"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale } = useLocale()
  const t = useTranslations(locale)

  // 언어 옵션
  const languages = [
    { code: "ko", name: "한국어" },
    { code: "en", name: "English" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "th", name: "ภาษาไทย" },
    { code: "zh", name: "简体中文" },
  ]

  // 현재 경로에서 로케일 부분을 제거하고 새 로케일로 경로 생성
  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/")
    return `/${newLocale}/${pathWithoutLocale}`
  }

  // 우물천장 프레임 하위 메뉴
  const ceilingFrameSubmenu = [
    { href: `/${locale}/products/ceiling-frame/3`, label: t.ceilingFrameType1 },
    { href: `/${locale}/products/ceiling-frame/2`, label: t.ceilingFrameType2 },
    { href: `/${locale}/products/ceiling-frame/1`, label: t.ceilingFrameType3 },
  ]

  // 무선 스위치 하위 메뉴
  const wirelessSwitchSubmenu = [
    { href: `/${locale}/products/wireless-switch/type1`, label: t.wirelessSwitchType1 },
    { href: `/${locale}/products/wireless-switch/type2`, label: t.wirelessSwitchType2 },
  ]

  // 네비게이션 링크
  const navLinks = [
    { href: `/${locale}/company`, label: t.companyIntroduction },
    { href: `/${locale}/products`, label: t.allProducts },
    {
      href: `/${locale}/products/ceiling-frame`,
      label: t.ceilingFrame,
      submenu: ceilingFrameSubmenu,
    },
    {
      href: `/${locale}/products/wireless-switch`,
      label: t.wirelessSwitch,
      submenu: wirelessSwitchSubmenu,
    },
    { href: `/${locale}/products/accessories`, label: t.accessories },
    { href: `/${locale}/consultation`, label: t.freeConsultation },
    { href: `/${locale}/board`, label: t.board },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image src="/images/logo.png" alt="주식회사 엘엔피 (LNP Corporation)" fill className="object-contain" />
            </div>
            <div className="font-bold text-lg">
              <span className="text-black">(주)엘엔피</span>
              <span className="text-sm text-gray-600 ml-1">Light & People</span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-base font-medium transition-colors hover:text-orange-500 ${
                    pathname === link.href || (pathname.startsWith(`${link.href}/`) && link.href !== `/${locale}`)
                      ? "text-orange-500"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="inline-block h-4 w-4 ml-1" />}
                </Link>

                {/* 서브메뉴 */}
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            pathname === subItem.href ? "text-orange-500" : "text-gray-700"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 언어 선택 및 모바일 메뉴 버튼 */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>{languages.find((lang) => lang.code === locale)?.name || "Language"}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={locale === lang.code ? "bg-gray-100" : ""}
                  >
                    <Link href={getLocalizedPath(lang.code)} className="w-full">
                      {lang.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 모바일 메뉴 버튼 */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href} className="py-2">
                  <Link
                    href={link.href}
                    className={`text-base font-medium py-2 transition-colors hover:text-orange-500 ${
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "text-orange-500"
                        : "text-gray-600"
                    }`}
                    onClick={() => !link.submenu && setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {/* 모바일 서브메뉴 */}
                  {link.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block py-1 text-sm hover:text-orange-500 ${
                            pathname === subItem.href ? "text-orange-500" : "text-gray-700"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          - {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
