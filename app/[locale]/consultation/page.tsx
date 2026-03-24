"use client"
import { useActionState } from "react"
import { useTranslations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { submitConsultation } from "./actions"
import { use } from "react"

// ✅ 1. 상자의 초기 상태에 preview 칸을 미리 만들어줍니다. (에러 해결 핵심!)
const initialState = {
  success: false,
  message: "",
  preview: false, 
}

export default function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const t = useTranslations(locale)
  const [state, formAction, isPending] = useActionState(submitConsultation, initialState)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.freeConsultation}</h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        {locale === "ko"
          ? "제품 구매 관련 문의 및 A/S 관련 문의는 아래 문의 신청서를 작성하여 주시면"
          : locale === "en"
            ? "For product purchase inquiries and service inquiries, please fill out the inquiry form below"
            : locale === "vi"
              ? "Đối với các yêu cầu mua sản phẩm và yêu cầu dịch vụ, vui lòng điền vào mẫu yêu cầu bên dưới"
              : locale === "th"
                ? "สำหรับการสอบถามเกี่ยวกับการซื้อสินค้าและบริการ โปรดกรอกแบบฟอร์มสอบถามด้านล่าง"
                : "对于产品购买咨询和服务咨询，请填写下面的咨询表格"}
        <br />
        {locale === "ko"
          ? "빠른 시간 내로 연락 드리겠습니다."
          : locale === "en"
            ? "and we will contact you as soon as possible."
            : locale === "vi"
              ? "và chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
              : locale === "th"
                ? "และเราจะติดต่อกลับหาคุณโดยเร็วที่สุด"
                : "我们将尽快与您联系。"}
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 컨설팅 혜택 */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">
            {locale === "ko"
              ? "(주)엘엔피 제품 사용 시 혜택"
              : locale === "en"
                ? "Benefits of Using LNP Products"
                : locale === "vi"
                  ? "Lợi ích của việc sử dụng sản phẩm LNP"
                  : locale === "th"
                    ? "ประโยชน์ของการใช้ผลิตภัณฑ์ LNP"
                    : "使用LNP产品的好处"}
          </h2>

          <div className="space-y-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">{t[`benefitTitle${item}` as keyof typeof t]}</h3>
                  <p className="text-gray-700">{t[`benefitDescription${item}` as keyof typeof t]}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-gray-50 border-none">
            <CardHeader>
              <CardTitle>
                {locale === "ko"
                  ? "문의하기"
                  : locale === "en"
                    ? "Contact Us"
                    : locale === "vi"
                      ? "Liên hệ với chúng tôi"
                      : locale === "th"
                        ? "ติดต่อเรา"
                        : "联系我们"}
              </CardTitle>
              <CardDescription>(주)엘엔피의 제품을 사용해본 대표님의 후기 입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="italic border-l-4 border-gray-300 pl-4">
                {locale === "ko"
                  ? '"엘엔피 제품 사용한 이후로 시공이 정말 편해졌습니다. 하루에 여러 집을 시공 할 수 있어서 매출도 많이 상승 되는 효과가 있었구요. 무엇보다 모두 국내 생산이라서 그런지 품질이 훌륭합니다. 고객 집으로 A/S를 가야 하는 일이 거의 없어서 그것 또한 큰 이득이라고 생각 합니다.'
                  : locale === "en"
                    ? '"Since using LNP products, construction has become really convenient. I could work on multiple houses in a day, which had the effect of significantly increasing sales. Above all, perhaps because they are all domestically produced, the quality is excellent. I rarely have to go to customers\' homes for service, which I also think is a big advantage."'
                    : locale === "vi"
                      ? '"Kể từ khi sử dụng sản phẩm LNP, việc xây dựng đã trở nên thực sự thuận tiện. Tôi có thể làm việc trên nhiều ngôi nhà trong một ngày, điều này có tác dụng làm tăng đáng kể doanh số. Trên hết, có lẽ vì tất cả đều được sản xuất trong nước, chất lượng rất xuất sắc. Tôi hiếm khi phải đến nhà khách hàng để bảo trì, điều mà tôi cũng nghĩ là một lợi thế lớn."'
                      : locale === "th"
                        ? '"ตั้งแต่ใช้ผลิตภัณฑ์ LNP การก่อสร้างก็สะดวกขึ้นมาก ฉันสามารถทำงานในหลายบ้านในหนึ่งวัน ซึ่งมีผลทำให้ยอดขายเพิ่มขึ้นอย่างมีนัยสำคัญ เหนือสิ่งอื่นใด อาจเป็นเพราะทั้งหมดผลิตในประเทศ คุณภาพจึงยอดเยี่ยม ฉันแทบไม่ต้องไปที่บ้านของลูกค้าเพื่อให้บริการ ซึ่งฉันคิดว่าเป็นข้อได้เปรียบที่สำคัญ"'
                        : '"自从使用LNP产品以来，施工变得非常方便。我可以在一天内完成多个房屋的工作，这对销售额有显著提升的效果。最重要的是，可能因为它们都是国内生产的，质量非常优秀。我很少需要去客户家中进行售后服务，这也是一个很大的优势。"'}
                <br />
                <br />
                {locale === "ko"
                  ? "다른 신제품이 나오면 꼭 사용해볼 생각 입니다."
                  : locale === "en"
                    ? "I definitely plan to try new products when they come out."
                    : locale === "vi"
                      ? "Tôi chắc chắn có kế hoạch thử các sản phẩm mới khi chúng ra mắt."
                      : locale === "th"
                        ? "ฉันวางแผนที่จะลองผลิตภัณฑ์ใหม่เมื่อออกวางจำหน่ายอย่างแน่นอน"
                        : "当新产品推出时，我一定会尝试使用。"}
                <br />
                <br />
                {locale === "ko"
                  ? "확실이 믿을만한 기업 인것 같습니다."
                  : locale === "en"
                    ? "It seems to be a reliable company for sure."
                    : locale === "vi"
                      ? "Có vẻ như đây chắc chắn là một công ty đáng tin cậy."
                      : locale === "th"
                        ? "ดูเหมือนเป็นบริษัทที่น่าเชื่อถืออย่างแน่นอน"
                        : "这确实是一家值得信赖的公司。"}
              </blockquote>
              <div className="mt-4 font-semibold">
                {locale === "ko"
                  ? "김XX 대표"
                  : locale === "en"
                    ? "CEO Kim XX"
                    : locale === "vi"
                      ? "Giám đốc Kim XX"
                      : locale === "th"
                        ? "CEO คิม XX"
                        : "金XX 代表"}
              </div>
              <div className="text-sm text-gray-600">
                {locale === "ko"
                  ? "XXX 인테리어 디자인"
                  : locale === "en"
                    ? "XXX Interior Design"
                    : locale === "vi"
                      ? "Thiết kế nội thất XXX"
                      : locale === "th"
                        ? "การออกแบบตกแต่งภายใน XXX"
                        : "XXX 室内设计"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 컨설팅 신청 폼 */}
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>
                {locale === "ko"
                  ? "문의하기"
                  : locale === "en"
                    ? "Contact Us"
                    : locale === "vi"
                      ? "Liên hệ với chúng tôi"
                      : locale === "th"
                        ? "ติดต่อเรา"
                        : "联系我们"}
              </CardTitle>
              <CardDescription>
                {locale === "ko"
                  ? "아래 양식을 작성하여 문의 하시면 24시간 내로 연락 드리겠습니다."
                  : locale === "en"
                    ? "Fill out the form below and we will contact you within 24 hours."
                    : locale === "vi"
                      ? "Điền vào mẫu dưới đây và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ."
                      : locale === "th"
                        ? "กรอกแบบฟอร์มด้านล่างและเราจะติดต่อคุณภายใน 24 ชั่วโมง"
                        : "填写下面的表格，我们将在24小时内与您联系。"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {state.message && (
                <div
                  className={`mb-4 p-4 rounded ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {state.message}
                  {/* ✅ 이제 TypeScript가 이 preview 칸을 정확히 인식합니다! */}
                  {state.success && (state as any).preview && (
                    <div className="mt-2 text-sm">
                      <strong>참고:</strong> 현재 프리뷰 환경에서는 실제 이메일이 전송되지 않습니다. 
                      실제 배포 환경에서는 2022landp@gmail.com으로 이메일이 전송됩니다.
                    </div>
                  )}
                </div>
              )}
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      {locale === "ko"
                        ? "이름(또는 회사명)"
                        : locale === "en"
                          ? "Name (or Company Name)"
                          : locale === "vi"
                            ? "Tên (hoặc Tên Công ty)"
                            : locale === "th"
                              ? "ชื่อ (หรือชื่อบริษัท)"
                              : "姓名（或公司名称）"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={
                        locale === "ko"
                          ? "이름 또는 회사명을 입력하세요"
                          : locale === "en"
                            ? "Enter your name or company name"
                            : locale === "vi"
                              ? "Nhập tên hoặc tên công ty của bạn"
                              : locale === "th"
                                ? "ใส่ชื่อหรือชื่อบริษัทของคุณ"
                                : "输入您的姓名或公司名称"
                      }
                      required
                    />
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
                    {locale === "ko"
                      ? "문의 유형"
                      : locale === "en"
                        ? "Inquiry Type"
                        : locale === "vi"
                          ? "Loại yêu cầu"
                          : locale === "th"
                            ? "ประเภทการสอบถาม"
                            : "咨询类型"}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">
                      {locale === "ko"
                        ? "문의 유형을 선택하세요"
                        : locale === "en"
                          ? "Select inquiry type"
                          : locale === "vi"
                            ? "Chọn loại yêu cầu"
                            : locale === "th"
                              ? "เลือกประเภทการสอบถาม"
                              : "选择咨询类型"}
                    </option>
                    <option value="all">
                      {locale === "ko"
                        ? "(주)엘엔피 판매 모든 상품 구매 문의"
                        : locale === "en"
                          ? "Inquiry about all products sold by LNP Corporation"
                          : locale === "vi"
                            ? "Yêu cầu về tất cả sản phẩm được bán bởi Công ty LNP"
                            : locale === "th"
                              ? "สอบถามเกี่ยวกับสินค้าทั้งหมดที่จำหน่ายโดยบริษัท LNP"
                              : "关于LNP公司销售的所有产品的咨询"}
                    </option>
                    <option value="ceiling">
                      {locale === "ko"
                        ? "우물천장 프레임 구매 문의"
                        : locale === "en"
                          ? "Ceiling Frame Purchase Inquiry"
                          : locale === "vi"
                            ? "Yêu cầu mua khung trần"
                            : locale === "th"
                              ? "สอบถามการซื้อเฟรมเพดาน"
                              : "天花板框架购买咨询"}
                    </option>
                    <option value="switch">
                      {locale === "ko"
                        ? "GUGU 무선 스위치 구매 문의"
                        : locale === "en"
                          ? "GUGU Wireless Switch Purchase Inquiry"
                          : locale === "vi"
                            ? "Yêu cầu mua công tắc không dây GUGU"
                            : locale === "th"
                              ? "สอบถามการซื้อสวิตช์ไร้สาย GUGU"
                              : "GUGU无线开关购买咨询"}
                    </option>
                    <option value="service">
                      {locale === "ko"
                        ? "GUGU 스위치 A/S 관련 문의"
                        : locale === "en"
                          ? "GUGU Switch Service Inquiry"
                          : locale === "vi"
                            ? "Yêu cầu dịch vụ công tắc GUGU"
                            : locale === "th"
                              ? "สอบถามเกี่ยวกับบริการสวิตช์ GUGU"
                              : "GUGU开关服务咨询"}
                    </option>
                    <option value="other">
                      {locale === "ko"
                        ? "기타 문의"
                        : locale === "en"
                          ? "Other Inquiry"
                          : locale === "vi"
                            ? "Yêu cầu khác"
                            : locale === "th"
                              ? "การสอบถามอื่นๆ"
                              : "其他咨询"}
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    {t.message}
                  </label>
                  <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required />
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {locale === "ko"
                    ? "* 문의 내용은 주식회사 엘엔피의 대표 메일(2022landp@landp.kr)을 통해 전송 됩니다."
                    : locale === "en"
                      ? "* Your inquiry will be sent through LNP Corporation's representative email (2022landp@landp.kr)."
                      : locale === "vi"
                        ? "* Yêu cầu của bạn sẽ được gửi qua email đại diện của Công ty LNP (2022landp@landp.kr)."
                        : locale === "th"
                          ? "* คำถามของคุณจะถูกส่งผ่านอีเมลตัวแทนของบริษัท LNP (2022landp@landp.kr)"
                          : "* 您的咨询将通过LNP公司的代表电子邮件(2022landp@landp.kr)发送。"}
                </p>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isPending}
                >
                  {isPending
                    ? locale === "ko"
                      ? "제출 중..."
                      : locale === "en"
                        ? "Submitting..."
                        : locale === "vi"
                          ? "Đang gửi..."
                          : locale === "th"
                            ? "กำลังส่ง..."
                            : "提交中..."
                    : locale === "ko"
                      ? "문의하기"
                      : locale === "en"
                        ? "Submit Inquiry"
                        : locale === "vi"
                          ? "Gửi yêu cầu"
                          : locale === "th"
                            ? "ส่งคำถาม"
                            : "提交咨询"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
