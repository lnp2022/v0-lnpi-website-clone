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

  // 다국어 지원을 위한 함수들
  function getPageDescription() {
    switch (params.locale) {
      case "ko":
        return "제품 구매 관련 문의 및 A/S 관련 문의는 아래 문의 신청서를 작성하여 주시면\n빠른 시간 내로 연락 드리겠습니다."
      case "en":
        return "Please fill out the inquiry form below for product purchase or after-sales service inquiries.\nWe will contact you as soon as possible."
      case "vi":
        return "Vui lòng điền vào mẫu đơn dưới đây để yêu cầu về mua sản phẩm hoặc dịch vụ sau bán hàng.\nChúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
      case "th":
        return "กรุณากรอกแบบฟอร์มด้านล่างสำหรับการสอบถามเกี่ยวกับการซื้อผลิตภัณฑ์หรือบริการหลังการขาย\nเราจะติดต่อกลับโดยเร็วที่สุด"
      case "zh":
        return "请填写下面的咨询表格，了解产品购买或售后服务。\n我们将尽快与您联系。"
      default:
        return "제품 구매 관련 문의 및 A/S 관련 문의는 아래 문의 신청서를 작성하여 주시면\n빠른 시간 내로 연락 드리겠습니다."
    }
  }

  function getBenefitsTitle() {
    switch (params.locale) {
      case "ko":
        return "(주)엘엔피 제품 사용 시 혜택"
      case "en":
        return "Benefits of Using LNP Products"
      case "vi":
        return "Lợi ích khi sử dụng sản phẩm LNP"
      case "th":
        return "ประโยชน์ของการใช้ผลิตภัณฑ์ LNP"
      case "zh":
        return "使用LNP产品的好处"
      default:
        return "(주)엘엔피 제품 사용 시 혜택"
    }
  }

  function getTestimonialDescription() {
    switch (params.locale) {
      case "ko":
        return "(주)엘엔피의 제품을 사용해본 대표님의 후기 입니다."
      case "en":
        return "Review from a CEO who has used LNP products."
      case "vi":
        return "Đánh giá từ CEO đã sử dụng sản phẩm LNP."
      case "th":
        return "บทวิจารณ์จาก CEO ที่ใช้ผลิตภัณฑ์ LNP"
      case "zh":
        return "使用过LNP产品的CEO评价。"
      default:
        return "(주)엘엔피의 제품을 사용해본 대표님의 후기 입니다."
    }
  }

  function getTestimonialContent() {
    switch (params.locale) {
      case "ko":
        return '"엘엔피 제품 사용한 이후로 시공이 정말 편해졌습니다. 하루에 여러 집을 시공 할 수 있어서 매출도 많이 상승 되는 효과가 있었구요. 무엇보다 모두 국내 생산이라서 그런지 품질이 훌륭합니다. 고객 집으로 A/S를 가야 하는 일이 거의 없어서 그것 또한 큰 이득이라고 생각 합니다.\n\n다른 신제품이 나오면 꼭 사용해볼 생각 입니다.\n확실이 믿을만한 기업 인것 같습니다."'
      case "en":
        return '"Since using LNP products, construction has become much easier. I can work on multiple houses in a day, which has significantly increased my sales. Above all, the quality is excellent as everything is produced domestically. I rarely have to go to customers\' homes for after-sales service, which is also a big advantage.\n\nI will definitely try other new products when they come out.\nIt seems to be a reliable company for sure."'
      case "vi":
        return '"Kể từ khi sử dụng sản phẩm LNP, việc xây dựng đã trở nên dễ dàng hơn nhiều. Tôi có thể làm việc trên nhiều ngôi nhà trong một ngày, điều này đã làm tăng đáng kể doanh số của tôi. Trên hết, chất lượng rất xuất sắc vì mọi thứ đều được sản xuất trong nước. Tôi hiếm khi phải đến nhà khách hàng để dịch vụ sau bán hàng, đó cũng là một lợi thế lớn.\n\nTôi chắc chắn sẽ thử các sản phẩm mới khác khi chúng ra mắt.\nCó vẻ như đây là một công ty đáng tin cậy."'
      case "th":
        return '"ตั้งแต่ใช้ผลิตภัณฑ์ LNP การก่อสร้างก็ง่ายขึ้นมาก ฉันสามารถทำงานในหลายบ้านในหนึ่งวัน ซึ่งช่วยเพิ่มยอดขายของฉันอย่างมาก เหนือสิ่งอื่นใด คุณภาพยอดเยี่ยมเพราะทุกอย่างผลิตในประเทศ ฉันแทบไม่ต้องไปที่บ้านของลูกค้าสำหรับบริการหลังการขาย ซึ่งเป็นข้อได้เปรียบที่สำคัญ\n\nฉันจะลองใช้ผลิตภัณฑ์ใหม่อื่นๆ เมื่อออกมาแน่นอน\nดูเหมือนจะเป็นบริษัทที่น่าเชื่อถือ"'
      case "zh":
        return '"自从使用LNP产品以来，施工变得更加容易。我可以在一天内完成多个房屋的工作，这大大增加了我的销售额。最重要的是，由于所有产品都是国内生产的，质量非常出色。我很少需要去客户家中进行售后服务，这也是一个很大的优势。\n\n当新产品推出时，我一定会尝试使用。\n这似乎是一家值得信赖的公司。"'
      default:
        return '"엘엔피 제품 사용한 이후로 시공이 정말 편해졌습니다. 하루에 여러 집을 시공 할 수 있어서 매출도 많이 상승 되는 효과가 있었구요. 무엇보다 모두 국내 생산이라서 그런지 품질이 훌륭합니다. 고객 집으로 A/S를 가야 하는 일이 거의 없어서 그것 또한 큰 이득이라고 생각 합니다.\n\n다른 신제품이 나오면 꼭 사용해볼 생각 입니다.\n확실이 믿을만한 기업 인것 같습니다."'
    }
  }

  function getTestimonialAuthor() {
    switch (params.locale) {
      case "ko":
        return "김XX 대표"
      case "en":
        return "CEO Kim XX"
      case "vi":
        return "Giám đốc Kim XX"
      case "th":
        return "ซีอีโอ คิม XX"
      case "zh":
        return "金XX 代表"
      default:
        return "김XX 대표"
    }
  }

  function getTestimonialCompany() {
    switch (params.locale) {
      case "ko":
        return "XXX 인테리어 디자인"
      case "en":
        return "XXX Interior Design"
      case "vi":
        return "XXX Thiết kế nội thất"
      case "th":
        return "XXX การออกแบบตกแต่งภายใน"
      case "zh":
        return "XXX 室内设计"
      default:
        return "XXX 인테리어 디자인"
    }
  }

  function getInquiryFormTitle() {
    switch (params.locale) {
      case "ko":
        return "문의하기"
      case "en":
        return "Contact Us"
      case "vi":
        return "Liên hệ với chúng tôi"
      case "th":
        return "ติดต่อเรา"
      case "zh":
        return "联系我们"
      default:
        return "문의하기"
    }
  }

  function getInquiryFormDescription() {
    switch (params.locale) {
      case "ko":
        return "아래 양식을 작성하여 문의 하시면 24시간 내로 연락 드리겠습니다."
      case "en":
        return "Fill out the form below and we will contact you within 24 hours."
      case "vi":
        return "Điền vào mẫu dưới đây và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ."
      case "th":
        return "กรอกแบบฟอร์มด้านล่างและเราจะติดต่อคุณภายใน 24 ชั่วโมง"
      case "zh":
        return "填写下面的表格，我们将在24小时内与您联系。"
      default:
        return "아래 양식을 작성하여 문의 하시면 24시간 내로 연락 드리겠습니다."
    }
  }

  function getNameLabel() {
    switch (params.locale) {
      case "ko":
        return "이름(또는 회사명)"
      case "en":
        return "Name (or Company Name)"
      case "vi":
        return "Tên (hoặc Tên công ty)"
      case "th":
        return "ชื่อ (หรือชื่อบริษัท)"
      case "zh":
        return "姓名（或公司名称）"
      default:
        return "이름(또는 회사명)"
    }
  }

  function getNamePlaceholder() {
    switch (params.locale) {
      case "ko":
        return "이름 또는 회사명을 입력하세요"
      case "en":
        return "Enter your name or company name"
      case "vi":
        return "Nhập tên hoặc tên công ty của bạn"
      case "th":
        return "ป้อนชื่อหรือชื่อบริษัทของคุณ"
      case "zh":
        return "输入您的姓名或公司名称"
      default:
        return "이름 또는 회사명을 입력하세요"
    }
  }

  function getInquiryTypeLabel() {
    switch (params.locale) {
      case "ko":
        return "문의 유형"
      case "en":
        return "Inquiry Type"
      case "vi":
        return "Loại yêu cầu"
      case "th":
        return "ประเภทการสอบถาม"
      case "zh":
        return "咨询类型"
      default:
        return "문의 유형"
    }
  }

  function getInquiryTypePlaceholder() {
    switch (params.locale) {
      case "ko":
        return "문의 유형을 선택하세요"
      case "en":
        return "Select inquiry type"
      case "vi":
        return "Chọn loại yêu cầu"
      case "th":
        return "เลือกประเภทการสอบถาม"
      case "zh":
        return "选择咨询类型"
      default:
        return "문의 유형을 선택하세요"
    }
  }

  function getInquiryTypeOptions() {
    switch (params.locale) {
      case "ko":
        return [
          { value: "all", label: "(주)엘엔피 판매 모든 상품 구매 문의" },
          { value: "ceiling", label: "우물천장 프레임 구매 문의" },
          { value: "switch", label: "GUGU 무선 스위치 구매 문의" },
          { value: "service", label: "GUGU 스위치 A/S 관련 문의" },
          { value: "other", label: "기타 문의" },
        ]
      case "en":
        return [
          { value: "all", label: "Inquiry about all products sold by LNP" },
          { value: "ceiling", label: "Inquiry about ceiling frame purchase" },
          { value: "switch", label: "Inquiry about GUGU wireless switch purchase" },
          { value: "service", label: "Inquiry about GUGU switch after-sales service" },
          { value: "other", label: "Other inquiries" },
        ]
      case "vi":
        return [
          { value: "all", label: "Yêu cầu về tất cả các sản phẩm do LNP bán" },
          { value: "ceiling", label: "Yêu cầu về mua khung trần" },
          { value: "switch", label: "Yêu cầu về mua công tắc không dây GUGU" },
          { value: "service", label: "Yêu cầu về dịch vụ sau bán hàng của công tắc GUGU" },
          { value: "other", label: "Các yêu cầu khác" },
        ]
      case "th":
        return [
          { value: "all", label: "สอบถามเกี่ยวกับผลิตภัณฑ์ทั้งหมดที่จำหน่ายโดย LNP" },
          { value: "ceiling", label: "สอบถามเกี่ยวกับการซื้อโครงเพดาน" },
          { value: "switch", label: "สอบถามเกี่ยวกับการซื้อสวิตช์ไร้สาย GUGU" },
          { value: "service", label: "สอบถามเกี่ยวกับบริการหลังการขายของสวิตช์ GUGU" },
          { value: "other", label: "สอบถามอื่นๆ" },
        ]
      case "zh":
        return [
          { value: "all", label: "关于LNP销售的所有产品的咨询" },
          { value: "ceiling", label: "关于天花板框架购买的咨询" },
          { value: "switch", label: "关于GUGU无线开关购买的咨询" },
          { value: "service", label: "关于GUGU开关售后服务的咨询" },
          { value: "other", label: "其他咨询" },
        ]
      default:
        return [
          { value: "all", label: "(주)엘엔피 판매 모든 상품 구매 문의" },
          { value: "ceiling", label: "우물천장 프레임 구매 문의" },
          { value: "switch", label: "GUGU 무선 스위치 구매 문의" },
          { value: "service", label: "GUGU 스위치 A/S 관련 문의" },
          { value: "other", label: "기타 문의" },
        ]
    }
  }

  function getEmailNotice() {
    switch (params.locale) {
      case "ko":
        return "* 문의 내용은 주식회사 엘엔피의 대표 메일(2022landp@landp.kr)을 통해 전송 됩니다."
      case "en":
        return "* Your inquiry will be sent through LNP's representative email (2022landp@landp.kr)."
      case "vi":
        return "* Yêu cầu của bạn sẽ được gửi qua email đại diện của LNP (2022landp@landp.kr)."
      case "th":
        return "* คำถามของคุณจะถูกส่งผ่านอีเมลตัวแทนของ LNP (2022landp@landp.kr)"
      case "zh":
        return "* 您的咨询将通过LNP的代表电子邮件(2022landp@landp.kr)发送。"
      default:
        return "* 문의 내용은 주식회사 엘엔피의 대표 메일(2022landp@landp.kr)을 통해 전송 됩니다."
    }
  }

  function getSubmitButtonText() {
    switch (params.locale) {
      case "ko":
        return isPending ? "제출 중..." : "문의하기"
      case "en":
        return isPending ? "Submitting..." : "Submit Inquiry"
      case "vi":
        return isPending ? "Đang gửi..." : "Gửi yêu cầu"
      case "th":
        return isPending ? "กำลังส่ง..." : "ส่งคำถาม"
      case "zh":
        return isPending ? "提交中..." : "提交咨询"
      default:
        return isPending ? "제출 중..." : "문의하기"
    }
  }

  function getPreviewMessage() {
    switch (params.locale) {
      case "ko":
        return "참고: 현재 프리뷰 환경에서는 실제 이메일이 전송되지 않습니다. 실제 배포 환경에서는 2022landp@gmail.com으로 이메일이 전송됩니다."
      case "en":
        return "Note: In the current preview environment, no actual emails are sent. In the actual deployment environment, emails will be sent to 2022landp@gmail.com."
      case "vi":
        return "Lưu ý: Trong môi trường xem trước hiện tại, không có email thực nào được gửi. Trong môi trường triển khai thực tế, email sẽ được gửi đến 2022landp@gmail.com."
      case "th":
        return "หมายเหตุ: ในสภาพแวดล้อมการแสดงตัวอย่างปัจจุบัน ไม่มีการส่งอีเมลจริง ในสภาพแวดล้อมการปรับใช้จริง อีเมลจะถูกส่งไปยัง 2022landp@gmail.com"
      case "zh":
        return "注意：在当前预览环境中，不会发送实际电子邮件。在实际部署环境中，电子邮件将发送至2022landp@gmail.com。"
      default:
        return "참고: 현재 프리뷰 환경에서는 실제 이메일이 전송되지 않습니다. 실제 배포 환경에서는 2022landp@gmail.com으로 이메일이 전송됩니다."
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.freeConsultation}</h1>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">{getPageDescription()}</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 컨설팅 혜택 */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">{getBenefitsTitle()}</h2>

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
              <CardDescription>{getTestimonialDescription()}</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="italic border-l-4 border-gray-300 pl-4">
                {getTestimonialContent()
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {paragraph.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < paragraph.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
              </blockquote>
              <div className="mt-4 font-semibold">{getTestimonialAuthor()}</div>
              <div className="text-sm text-gray-600">{getTestimonialCompany()}</div>
            </CardContent>
          </Card>
        </div>

        {/* 컨설팅 신청 폼 */}
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>{getInquiryFormTitle()}</CardTitle>
              <CardDescription>{getInquiryFormDescription()}</CardDescription>
            </CardHeader>
            <CardContent>
              {state.message && (
                <div
                  className={`mb-4 p-4 rounded ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {state.message}
                  {state.success && state.preview && (
                    <div className="mt-2 text-sm">
                      <strong>참고:</strong> {getPreviewMessage()}
                    </div>
                  )}
                </div>
              )}
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      {getNameLabel()}
                    </label>
                    <Input id="name" name="name" placeholder={getNamePlaceholder()} required />
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
                    {getInquiryTypeLabel()}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">{getInquiryTypePlaceholder()}</option>
                    {getInquiryTypeOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    {t.message}
                  </label>
                  <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required />
                </div>

                <p className="text-sm text-gray-500 mb-4">{getEmailNotice()}</p>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isPending}
                >
                  {getSubmitButtonText()}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
