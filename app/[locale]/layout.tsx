import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LocaleProvider } from "@/components/locale-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "주식회사 엘엔피 (LNP Corporation)",
  description: "조명 인테리어 전문 기업 - 우물천장 프레임, 무선 스위치 등",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <LocaleProvider locale={params.locale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  )
}
