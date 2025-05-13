"use client"
import { useActionState } from "react"
import { useTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { submitConsultation } from "./actions"

const initialState = {
  success: false,
  message: "",
}

export default function ConsultationPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)
  const [state, formAction, isPending] = useActionState(submitConsultation, initialState)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.freeConsultation}</h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        제품 구매 관련 문의 및 A/S 관련 문의는 아래 문의 신청서를 작성하여 주시면
        <br />
        빠른 시간 내로 연락 드리겠습니다.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 컨설팅 혜택 */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">(주)엘엔피 제품 사용 시 혜택</h2>

          <div className="space-y-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">{t[`benefitTitle${item}`]}</h3>
                  <p className="text-gray-700">{t[`benefitDescription${item}`]}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-gray-50 border-none">
            <CardHeader>
              <CardTitle>{t.testimonialTitle}</CardTitle>
              <CardDescription>(주)엘엔피의 제품을 사용해본 대표님의 후기 입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="italic border-l-4 border-gray-300 pl-4">
                "엘엔피 제품 사용한 이후로 시공이 정말 편해졌습니다. 하루에 여러 집을 시공 할 수 있어서 매출도 많이 상승
                되는 효과가 있었구요. 무엇보다 모두 국내 생산이라서 그런지 품질이 훌륭합니다. 고객 집으로 A/S를 가야
                하는 일이 거의 없어서 그것 또한 큰 이득이라고 생각 합니다.
                <br />
                <br />
                다른 신제품이 나오면 꼭 사용해볼 생각 입니다.
                <br />
                확실이 믿을만한 기업 인것 같습니다."
              </blockquote>
              <div className="mt-4 font-semibold">김XX 대표</div>
              <div className="text-sm text-gray-600">XXX 인테리어 디자인</div>
            </CardContent>
          </Card>
        </div>

        {/* 컨설팅 신청 폼 */}
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>문의하기</CardTitle>
              <CardDescription>아래 양식을 작성하여 문의 하시면 24시간 내로 연락 드리겠습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              {state.message && (
                <div
                  className={`mb-4 p-4 rounded ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {state.message}
                  {state.success && state.preview && (
                    <div className="mt-2 text-sm">
                      <strong>참고:</strong> 현재 프리뷰 환경에서는 실제 이메일이 전송되지 않습니다. 실제 배포
                      환경에서는 2022landp@gmail.com으로 이메일이 전송됩니다.
                    </div>
                  )}
                </div>
              )}
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      이름(또는 회사명)
                    </label>
                    <Input id="name" name="name" placeholder="이름 또는 회사명을 입력하세요" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium">
                      {t.phone}
                    </label>
                    <Input id="phone" name="phone" placeholder={t.phonePlaceholder} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="font-medium">
                    문의 유형
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="all">(주)엘엔피 판매 모든 상품 구매 문의</option>
                    <option value="ceiling">우물천장 프레임 구매 문의</option>
                    <option value="switch">GUGU 무선 스위치 구매 문의</option>
                    <option value="service">GUGU 스위치 A/S 관련 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    {t.message}
                  </label>
                  <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required />
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  * 문의 내용은 주식회사 엘엔피의 대표 메일(2022landp@landp.kr)을 통해 전송 됩니다.
                </p>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isPending}
                >
                  {isPending ? "제출 중..." : "문의하기"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
