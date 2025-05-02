import type React from "react"
import ProductSubmenu from "@/components/product-submenu"

export default function CeilingFrameLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <div>
      <ProductSubmenu locale={params.locale} />
      {children}
    </div>
  )
}
