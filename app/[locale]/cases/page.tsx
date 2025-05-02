"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CasesPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 설치 사례 카테고리
  const categories = [
    { id: "all", name: t.allCases },
    { id: "commercial", name: t.commercial },
    { id: "residential", name: t.residential },
    { id: "office", name: t.office },
    { id: "hotel", name: t.hotel },
  ]

  // 설치 사례 데이터
  const cases = [
    {
      id: 1,
      title: t.caseTitle1,
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation1,
      year: "2023",
    },
    {
      id: 2,
      title: t.caseTitle2,
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation2,
      year: "2022",
    },
    {
      id: 3,
      title: t.caseTitle3,
      category: "office",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation3,
      year: "2022",
    },
    {
      id: 4,
      title: t.caseTitle4,
      category: "hotel",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation4,
      year: "2021",
    },
    {
      id: 5,
      title: t.caseTitle5,
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation5,
      year: "2021",
    },
    {
      id: 6,
      title: t.caseTitle6,
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      location: t.caseLocation6,
      year: "2020",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.installationCases}</h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">{t.casesPageDescription}</p>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases
                .filter((item) => category.id === "all" || item.category === category.id)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64 w-full">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <div className="text-gray-600 text-sm mb-3">
                        {item.location} | {item.year}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        {t.viewDetails}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* 프로젝트 문의 */}
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{t.startYourProject}</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{t.projectInquiryDescription}</p>
        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">{t.contactForProject}</Button>
      </div>
    </div>
  )
}
