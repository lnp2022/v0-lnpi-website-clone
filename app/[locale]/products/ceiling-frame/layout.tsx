import type React from "react"
import ProductSubmenu from "@/components/product-submenu"

export default async function CeilingFrameLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <div>
      <ProductSubmenu locale={locale} />
      {children}
    </div>
  )
}