"use client"

import { useTranslations } from "@/lib/translations"
import { Award, Users, Clock, Globe } from "lucide-react"

export default function CompanyHighlights({ locale }: { locale: string }) {
  const t = useTranslations(locale)

  // 회사 하이라이트 데이터
  const highlights = [
    {
      icon: <Award className="h-12 w-12 text-orange-500" />,
      title: t.highlightTitle1,
      description: t.highlightDesc1,
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: t.highlightTitle2,
      description: t.highlightDesc2,
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-500" />,
      title: t.highlightTitle3,
      description: t.highlightDesc3,
    },
    {
      icon: <Globe className="h-12 w-12 text-orange-500" />,
      title: t.highlightTitle4,
      description: t.highlightDesc4,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.whyChooseUs}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{t.whyChooseUsDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
