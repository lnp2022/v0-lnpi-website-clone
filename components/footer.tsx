"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider"
import { useTranslations } from "@/lib/translations"
import { Phone, Mail, MapPin, Instagram, Youtube, Printer } from "lucide-react"

export default function Footer() {
  const { locale } = useLocale()
  const t = useTranslations(locale)

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 mr-2">
                <Image
                  src="/images/logo-white.png"
                  alt="주식회사 엘엔피 (LNP Corporation)"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold">(주)엘엔피</div>
                <div className="text-sm">Light & People</div>
              </div>
            </div>
            <p className="mb-4">{t.footerCompanyDescription}</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/lnp_korea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC3K5GQBkJ2j-WbTeKiGY_pA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/company`} className="hover:text-white">
                  {t.companyIntroduction}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white">
                  {t.allProducts}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/consultation`} className="hover:text-white">
                  {t.freeConsultation}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cases`} className="hover:text-white">
                  {t.installationCases}
                </Link>
              </li>
            </ul>
          </div>

          {/* 제품 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">{t.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/products/ceiling-frame`} className="hover:text-white">
                  {t.ceilingFrame}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/wireless-switch`} className="hover:text-white">
                  {t.wirelessSwitch}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/accessories`} className="hover:text-white">
                  {t.accessories}
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">{t.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{t.companyFullAddress}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>031-992-4330</span>
              </li>
              <li className="flex items-center">
                <Printer className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>031-992-4331</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>2022landp@landp.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              &copy; {new Date().getFullYear()} 주식회사 엘엔피 (Light & People). {t.allRightsReserved}
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-300 mr-4">
                {t.privacyPolicy}
              </Link>
              <Link href="#" className="hover:text-gray-300">
                {t.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
