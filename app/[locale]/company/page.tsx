"use client"

import { useTranslations } from "@/lib/translations"
import ImageSlider from "@/components/image-slider"
import Image from "next/image"

export default function CompanyPage({
  params,
}: {
  params: { locale: string }
}) {
  const t = useTranslations(params.locale)

  // 회사 이미지 경로 배열
  const companyImages = [
    "/images/company/001.jpg",
    "/images/company/002.jpg",
    "/images/company/003.jpg",
    "/images/company/004.jpg",
    "/images/company/005.jpg",
    "/images/company/006.jpg",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{t.companyIntroduction}</h1>

      {/* 회사 개요 */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{t.companyTagline}</h2>
            <p className="text-gray-700 mb-4 text-2xl font-bold">{t.companyName2}</p>
            <p className="text-gray-700 mb-4">{t.companyDesc1}</p>

            <p className="text-gray-700 mb-4">{t.companyDesc2}</p>

            <p className="text-gray-700 mb-4">{t.companyDesc3}</p>

            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                {params.locale === "ko"
                  ? "합리적인 가격"
                  : params.locale === "en"
                    ? "Reasonable price"
                    : params.locale === "vi"
                      ? "Giá cả hợp lý"
                      : params.locale === "th"
                        ? "ราคาที่เหมาะสม"
                        : "合理的价格"}
              </li>
              <li className="mb-2">
                {params.locale === "ko"
                  ? "1시간 이내의 빠른 설치 시간"
                  : params.locale === "en"
                    ? "Quick installation time within 1 hour"
                    : params.locale === "vi"
                      ? "Thời gian lắp đặt nhanh chóng trong vòng 1 giờ"
                      : params.locale === "th"
                        ? "เวลาติดตั้งที่รวดเร็วภายใน 1 ชั่วโมง"
                        : "1小时内快速安装时间"}
              </li>
              <li className="mb-2">
                {params.locale === "ko"
                  ? "먼지 걱정 없는 청결한 시공"
                  : params.locale === "en"
                    ? "Clean construction without dust concerns"
                    : params.locale === "vi"
                      ? "Thi công sạch sẽ không lo bụi bẩn"
                      : params.locale === "th"
                        ? "การก่อสร้างที่สะอาดโดยไม่ต้องกังวลเรื่องฝุ่น"
                        : "无尘干净施工"}
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "이라는 혁신적인 솔루션을 통해, 우물천장 무드등 시공을 누구나 부담 없이 선택할 수 있는 시대를 열었습니다."
                : params.locale === "en"
                  ? "Through these innovative solutions, we have opened an era where anyone can choose ceiling mood lighting installation without burden."
                  : params.locale === "vi"
                    ? "Thông qua các giải pháp sáng tạo này, chúng tôi đã mở ra một kỷ nguyên mà bất kỳ ai cũng có thể lựa chọn lắp đặt đèn tạo không khí trần mà không gặp khó khăn."
                    : params.locale === "th"
                      ? "ผ่านโซลูชั่นที่เป็นนวัตกรรมเหล่านี้ เราได้เปิดยุคที่ทุกคนสามารถเลือกการติดตั้งไฟเพดานสร้างบรรยากาศได้โดยไม่มีภาระ"
                      : "通过这些创新解决方案，我们开创了一个任何人都可以毫无负担地选择天花板氛围灯安装的时代。"}
            </p>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "오늘날, 우물천장 무드등은 아파트 조명 인테리어의 필수 요소로 자리 잡았으며, 이 변화의 시작에는 주식회사 엘엔피가 있습니다."
                : params.locale === "en"
                  ? "Today, ceiling mood lighting has become an essential element of apartment lighting interior, and LNP Corporation is at the beginning of this change."
                  : params.locale === "vi"
                    ? "Ngày nay, đèn tạo không khí trần đã trở thành một yếu tố thiết yếu của nội thất chiếu sáng căn hộ, và Công ty LNP là khởi đầu của sự thay đổi này."
                    : params.locale === "th"
                      ? "ปัจจุบัน ไฟเพดานสร้างบรรยากาศได้กลายเป็นองค์ประกอบสำคัญของการตกแต่งภายในด้วยแสงสว่างในอพาร์ทเมนท์ และบริษัท LNP อยู่ที่จุดเริ่มต้นของการเปลี่ยนแปลงนี้"
                      : "如今，天花板氛围灯已成为公寓照明内饰的必要元素，LNP公司正是这一变革的开端。"}
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">
                {params.locale === "ko"
                  ? "핵심 가치 (Core Values)"
                  : params.locale === "en"
                    ? "Core Values"
                    : params.locale === "vi"
                      ? "Giá trị cốt lõi"
                      : params.locale === "th"
                        ? "ค่านิยมหลัก"
                        : "核心价值"}
              </h3>
              <ol className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">
                    1.{" "}
                    {params.locale === "ko"
                      ? "고객 중심 (Customer Focus)"
                      : params.locale === "en"
                        ? "Customer Focus"
                        : params.locale === "vi"
                          ? "Tập trung vào khách hàng"
                          : params.locale === "th"
                            ? "มุ่งเน้นลูกค้า"
                            : "以客户为中心"}
                  </span>{" "}
                  -{" "}
                  {params.locale === "ko"
                    ? "고객의 눈높이에서 생각하고, 고객의 편의를 최우선으로 고려합니다."
                    : params.locale === "en"
                      ? "We think from the customer's perspective and prioritize customer convenience."
                      : params.locale === "vi"
                        ? "Chúng tôi suy nghĩ từ góc độ của khách hàng và ưu tiên sự tiện lợi của khách hàng."
                        : params.locale === "th"
                          ? "เราคิดจากมุมมองของลูกค้าและให้ความสำคัญกับความสะดวกของลูกค้า"
                          : "我们从客户的角度思考，优先考虑客户的便利。"}
                </li>
                <li>
                  <span className="font-semibold">
                    2.{" "}
                    {params.locale === "ko"
                      ? "품질 혁신 (Quality Innovation)"
                      : params.locale === "en"
                        ? "Quality Innovation"
                        : params.locale === "vi"
                          ? "Đổi mới chất lượng"
                          : params.locale === "th"
                            ? "นวัตกรรมคุณภาพ"
                            : "质量创新"}
                  </span>{" "}
                  -{" "}
                  {params.locale === "ko"
                    ? "견고한 제품력과 안정적인 품질을 바탕으로 시장을 선도합니다."
                    : params.locale === "en"
                      ? "We lead the market based on solid product power and stable quality."
                      : params.locale === "vi"
                        ? "Chúng tôi dẫn đầu thị trường dựa trên sức mạnh sản phẩm vững chắc và chất lượng ổn định."
                        : params.locale === "th"
                          ? "เรานำตลาดด้วยพลังผลิตภัณฑ์ที่แข็งแกร่งและคุณภาพที่มั่นคง"
                          : "我们基于坚实的产品力和稳定的质量引领市场。"}
                </li>
                <li>
                  <span className="font-semibold">
                    3.{" "}
                    {params.locale === "ko"
                      ? "합리적 가치 제공 (Reasonable Value Offering)"
                      : params.locale === "en"
                        ? "Reasonable Value Offering"
                        : params.locale === "vi"
                          ? "Cung cấp giá trị hợp lý"
                          : params.locale === "th"
                            ? "การนำเสนอคุณค่าที่สมเหตุสมผล"
                            : "提供合理价值"}
                  </span>{" "}
                  -{" "}
                  {params.locale === "ko"
                    ? "높은 품질과 합리적인 가격을 동시에 실현하여, 누구나 부담 없이 선택할 수 있는 제품을 만듭니다."
                    : params.locale === "en"
                      ? "We create products that anyone can choose without burden by realizing high quality and reasonable prices simultaneously."
                      : params.locale === "vi"
                        ? "Chúng tôi tạo ra các sản phẩm mà bất kỳ ai cũng có thể lựa chọn mà không gặp khó khăn bằng cách đồng thời thực hiện chất lượng cao và giá cả hợp lý."
                        : params.locale === "th"
                          ? "เราสร้างผลิตภัณฑ์ที่ทุกคนสามารถเลือกได้โดยไม่มีภาระด้วยการทำให้คุณภาพสูงและราคาที่สมเหตุสมผลในเวลาเดียวกัน"
                          : "我们通过同时实现高质量和合理价格，创造出任何人都可以毫无负担地选择的产品。"}
                </li>
                <li>
                  <span className="font-semibold">
                    4.{" "}
                    {params.locale === "ko"
                      ? "지속적인 성장과 도전 (Continuous Growth & Challenge)"
                      : params.locale === "en"
                        ? "Continuous Growth & Challenge"
                        : params.locale === "vi"
                          ? "Tăng trưởng và thách thức liên tục"
                          : params.locale === "th"
                            ? "การเติบโตและความท้าทายอย่างต่อเนื่อง"
                            : "持续增长与挑战"}
                  </span>{" "}
                  -{" "}
                  {params.locale === "ko"
                    ? "트렌드에 머무르지 않고 끊임없이 개선하고, 새로운 도약을 위해 도전합니다."
                    : params.locale === "en"
                      ? "We continuously improve and challenge for new leaps, not staying in trends."
                      : params.locale === "vi"
                        ? "Chúng tôi liên tục cải tiến và thách thức cho những bước nhảy vọt mới, không dừng lại ở xu hướng."
                        : params.locale === "th"
                          ? "เราปรับปรุงและท้าทายอย่างต่อเนื่องเพื่อก้าวกระโดดใหม่ ไม่หยุดอยู่กับเทรนด์"
                          : "我们不停留在趋势中，不断改进，挑战新的飞跃。"}
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">
                {params.locale === "ko"
                  ? "앞으로의 약속"
                  : params.locale === "en"
                    ? "Future Promise"
                    : params.locale === "vi"
                      ? "Lời hứa tương lai"
                      : params.locale === "th"
                        ? "คำมั่นสัญญาในอนาคต"
                        : "未来的承诺"}
              </h3>
              <p className="text-gray-700">
                {params.locale === "ko"
                  ? "주식회사 엘엔피는 앞으로도 조명과 인테리어 분야에서 새로운 가치를 창출하며, 고객 여러분과 함께 성장해 나가겠습니다."
                  : params.locale === "en"
                    ? "LNP Corporation will continue to create new value in the lighting and interior fields and grow together with our customers."
                    : params.locale === "vi"
                      ? "Công ty LNP sẽ tiếp tục tạo ra giá trị mới trong lĩnh vực chiếu sáng và nội thất và phát triển cùng với khách hàng của chúng tôi."
                      : params.locale === "th"
                        ? "บริษัท LNP จะสร้างคุณค่าใหม่ในด้านแสงสว่างและการตกแต่งภายในอย่างต่อเนื่องและเติบโตไปพร้อมกับลูกค้าของเรา"
                        : "LNP公司将继续在照明和内饰领域创造新价值，与客户共同成长。"}
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <ImageSlider images={companyImages} interval={3000} className="shadow-lg" />
          </div>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.companyHistory}</h2>
        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 py-4">
          {/* 연혁 아이템 */}
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2023</div>
            <div className="text-gray-700">
              <p>{t.historyItem2023_1}</p>
              <p>{t.historyItem2023_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2022</div>
            <div className="text-gray-700">
              <p>{t.historyItem2022_1}</p>
              <p>{t.historyItem2022_2}</p>
              <p>{t.historyItem2022_3}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2021</div>
            <div className="text-gray-700">
              <p>{t.historyItem2021_1}</p>
              <p>{t.historyItem2021_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2020</div>
            <div className="text-gray-700">{t.historyItem2020_1}</div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2019</div>
            <div className="text-gray-700">
              <p>{t.historyItem2019_1}</p>
              <p>{t.historyItem2019_2}</p>
              <p>{t.historyItem2019_3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 특허 및 인증서 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.patentsAndCertificates}</h2>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">{t.patentsDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 이미지 1 - 우물천장 조립체 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image src="/images/patents/1.jpg" alt="특허증 - 우물천장 조립체" fill className="object-contain" />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 우물천장 조립체</p>
          </div>

          {/* 이미지 2 - 우물천장 직간접 조명시스템 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="/images/patents/2.jpg"
                alt="특허증 - 우물천장 직간접 조명시스템"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 우물천장 직간접 조명시스템</p>
          </div>

          {/* 이미지 3 - 디자인등록증 1 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="/images/patents/3.jpg"
                alt="디자인등록증 - 우물형 천장 조명등용 몰딩바"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">디자인등록증 - 우물형 천장 조명등용 몰딩바</p>
          </div>

          {/* 이미지 4 - 디자인등록증 2 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="/images/patents/4.jpg"
                alt="디자인등록증 - 우물형 천장 조명등용 몰딩바"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">디자인등록증 - 우물형 천장 조명등용 몰딩바</p>
          </div>

          {/* 이미지 5 - 무선 조명 제어 장치 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image src="/images/patents/5.jpg" alt="특허증 - 무선 조명 제어 장치" fill className="object-contain" />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 무선 조명 제어 장치</p>
          </div>

          {/* 이미지 6 - 연구개발전담부서 인정서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image src="/images/patents/6.jpg" alt="연구개발전담부서 인정서" fill className="object-contain" />
            </div>
            <p className="text-xs text-center text-gray-700">연구개발전담부서 인정서</p>
          </div>

          {/* 이미지 7 - 안전인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image src="/images/patents/7.jpg" alt="안전인증서 (KTR)" fill className="object-contain" />
            </div>
            <p className="text-xs text-center text-gray-700">안전인증서 (KTR)</p>
          </div>

          {/* 이미지 8 - 방송통신기자재 적합인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image src="/images/patents/8.jpg" alt="방송통신기자재 적합인증서" fill className="object-contain" />
            </div>
            <p className="text-xs text-center text-gray-700">방송통신기자재 적합인증서</p>
          </div>
        </div>
      </section>

      {/* 비전 및 미션 */}
      <section className="bg-gray-50 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.visionAndMission}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{t.vision}</h3>
            <p className="text-gray-700">{t.visionText}</p>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{t.mission}</h3>
            <p className="text-gray-700">{t.missionText}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
