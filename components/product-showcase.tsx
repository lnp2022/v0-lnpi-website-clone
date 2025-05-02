"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/translations"

export default function ProductShowcase({ locale }: { locale: string }) {
  const t = useTranslations(locale)

  // 제품 데이터
  const products = [
    {
      id: 1,
      name: t.ceilingFrame,
      image: "/images/ceiling-frame.png",
      description: t.ceilingFrameShortDesc,
      link: `/${locale}/products/ceiling-frame`,
    },
    {
      id: 2,
      name: t.wirelessSwitch,
      image: "/images/wireless-switch.png",
      description: t.wirelessSwitchShortDesc,
      link: `/${locale}/products/wireless-switch`,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.featuredProducts}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{t.featuredProductsDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-80 w-full bg-gray-50">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Link href={product.link}>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    {t.learnMore}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/products`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">{t.viewAllProducts}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
