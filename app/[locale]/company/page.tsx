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

  // 베트남어 번역 데이터 직접 정의
  const viTranslations = {
    historyItem2023_1: "Đăng ký bằng sáng chế cho đèn chiếu sáng đường viền trần",
    historyItem2023_2: "Đăng ký bằng sáng chế cho khung trần đơn",
    historyItem2022_1: "Đăng ký bằng sáng chế cho công nghệ công tắc cảm ứng không dây GUGU",
    historyItem2022_2: "Thành lập viện nghiên cứu",
    historyItem2022_3: "Phát triển khung trần đơn",
    historyItem2021_1: "Phát triển khung đèn chiếu sáng đường viền trần",
    historyItem2021_2: "Phát triển công tắc cảm ứng không dây GUGU loại APP",
    historyItem2020_1: "Phát triển công tắc cảm ứng không dây GUGU loại tiêu chuẩn",
    historyItem2019_1: "Thành lập Công ty LNP",
    historyItem2019_2: "Phát triển khung đèn tạo không khí trần đầu tiên của Hàn Quốc",
    historyItem2019_3: "Đăng ký bằng sáng chế liên quan đến khung đèn tạo không khí trần",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{t.companyIntroduction}</h1>

      {/* 회사 개요 */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {params.locale === "ko"
                ? "조명 인테리어의 새로운 기준을 세우다."
                : params.locale === "en"
                  ? "Setting New Standards for Lighting Interior"
                  : params.locale === "vi"
                    ? "Thiết lập tiêu chuẩn mới cho nội thất chiếu sáng"
                    : params.locale === "zh"
                      ? "为照明内饰设立新标准"
                      : "การตั้งมาตรฐานใหม่สำหรับการตกแต่งภายในด้วยแสงสว่าง"}
            </h2>
            <p className="text-gray-700 mb-4 text-2xl font-bold">
              {params.locale === "ko"
                ? "주식회사 엘엔피 회사 소개"
                : params.locale === "en"
                  ? "LNP Corporation Introduction"
                  : params.locale === "vi"
                    ? "Giới thiệu Công ty LNP"
                    : params.locale === "zh"
                      ? "LNP公司介绍"
                      : "แนะนำบริษัท LNP"}
            </p>
            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "주식회사 엘엔피는 조명 및 인테리어 분야의 혁신을 목표로, 2019년에 설립된 전문 기업입니다. 우리는 편리한 시공, 합리적인 가격, 우수한 품질을 기반으로, 고객의 만족과 가치를 높이는 데 최선을 다하고 있습니다."
                : params.locale === "en"
                  ? "LNP Corporation is a specialized company established in 2019 with the goal of innovation in the lighting and interior fields. We strive to enhance customer satisfaction and value based on convenient construction, reasonable prices, and excellent quality."
                  : params.locale === "vi"
                    ? "Công ty LNP là một công ty chuyên nghiệp được thành lập vào năm 2019 với mục tiêu đổi mới trong lĩnh vực chiếu sáng và nội thất. Chúng tôi nỗ lực nâng cao sự hài lòng và giá trị của khách hàng dựa trên xây dựng thuận tiện, giá cả hợp lý và chất lượng xuất sắc."
                    : params.locale === "zh"
                      ? "LNP公司是一家成立于2019年的专业公司，目标是在照明和室内装饰领域进行创新。我们基于便捷的施工、合理的价格和优质的品质，努力提高客户满意度和价值。"
                      : "บริษัท LNP เป็นบริษัทเฉพาะทางที่ก่อตั้งขึ้นในปี 2019 โดยมีเป้าหมายในการสร้างนวัตกรรมในด้านแสงสว่างและการตกแต่งภายใน เราพยายามเพิ่มความพึงพอใจและคุณค่าของลูกค้าบนพื้นฐานของการก่อสร้างที่สะดวก ราคาที่สมเหตุสมผล และคุณภาพที่ยอดเยี่ยม"}
            </p>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "특히, 저희가 개발한 우물천장 무드등 프레임과 무선 터치 스위치 제품은 업계의 패러다임을 새롭게 열었습니다. 주식회사 엘엔피가 설립되기 전까지, 우물천장 무드등 시공은 고가의 목공 작업이 필요해, 비용 부담과 긴 공사 기간, 심한 먼지 날림으로 인해 쉽게 접근할 수 없었습니다."
                : params.locale === "en"
                  ? "In particular, our developed ceiling mood lighting frame and wireless touch switch products have opened a new paradigm in the industry. Until LNP Corporation was established, ceiling mood lighting construction was not easily accessible due to the need for expensive carpentry work, cost burden, long construction periods, and severe dust scattering."
                  : params.locale === "vi"
                    ? "Đặc biệt, các sản phẩm khung đèn tạo không khí trần và công tắc cảm ứng không dây mà chúng tôi phát triển đã mở ra một mô hình mới trong ngành. Cho đến khi Công ty LNP được thành lập, việc xây dựng đèn tạo không khí trần không dễ tiếp cận do cần công việc mộc đắt tiền, gánh nặng chi phí, thời gian xây dựng dài và phát tán bụi nghiêm trọng."
                    : params.locale === "zh"
                      ? "特别是，我们开发的天花板氛围灯框架和无线触摸开关产品为行业开创了新的范式。在LNP公司成立之前，天花板氛围灯施工由于需要昂贵的木工作业、成本负担、长施工期和严重的灰尘飞扬而难以接近。"
                      : "โดยเฉพาะอย่างยิ่ง ผลิตภัณฑ์กรอบไฟสร้างบรรยากาศบนเพดานและสวิตช์สัมผัสไร้สายที่เราพัฒนาขึ้นได้เปิดกระบวนทัศน์ใหม่ในอุตสาหกรรม จนกระทั่งบริษัท LNP ก่อตั้งขึ้น การก่อสร้างไฟสร้างบรรยากาศบนเพดานไม่สามารถเข้าถึงได้ง่ายเนื่องจากต้องใช้งานไม้ที่มีราคาแพง ภาระด้านต้นทุน ระยะเวลาก่อสร้างที่ยาวนาน และการฟุ้งกระจายของฝุ่นที่รุนแรง"}
            </p>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "그러나 주식회사 엘엔피는"
                : params.locale === "en"
                  ? "However, LNP Corporation"
                  : params.locale === "vi"
                    ? "Tuy nhiên, Công ty LNP"
                    : params.locale === "zh"
                      ? "然而，LNP公司"
                      : "อย่างไรก็ตาม บริษัท LNP"}
            </p>

            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li className="mb-2">
                {params.locale === "ko"
                  ? "합리적인 가격"
                  : params.locale === "en"
                    ? "Reasonable price"
                    : params.locale === "vi"
                      ? "Giá cả hợp lý"
                      : params.locale === "zh"
                        ? "合理的价格"
                        : "ราคาที่สมเหตุสมผล"}
              </li>
              <li className="mb-2">
                {params.locale === "ko"
                  ? "1시간 이내의 빠른 설치 시간"
                  : params.locale === "en"
                    ? "Quick installation time within 1 hour"
                    : params.locale === "vi"
                      ? "Thời gian lắp đặt nhanh chóng trong vòng 1 giờ"
                      : params.locale === "zh"
                        ? "1小时内快速安装时间"
                        : "เวลาติดตั้งที่รวดเร็วภายใน 1 ชั่วโมง"}
              </li>
              <li className="mb-2">
                {params.locale === "ko"
                  ? "먼지 걱정 없는 청결한 시공"
                  : params.locale === "en"
                    ? "Clean construction without dust concerns"
                    : params.locale === "vi"
                      ? "Xây dựng sạch sẽ không lo lắng về bụi"
                      : params.locale === "zh"
                        ? "无尘担忧的清洁施工"
                        : "การก่อสร้างที่สะอาดโดยไม่ต้องกังวลเรื่องฝุ่น"}
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "이라는 혁신적인 솔루션을 통해, 우물천장 무드등 시공을 누구나 부담 없이 선택할 수 있는 시대를 열었습니다."
                : params.locale === "en"
                  ? "Through these innovative solutions, we have opened an era where anyone can choose ceiling mood lighting construction without burden."
                  : params.locale === "vi"
                    ? "Thông qua các giải pháp sáng tạo này, chúng tôi đã mở ra một kỷ nguyên mà bất kỳ ai cũng có thể lựa chọn xây dựng đèn tạo không khí trần mà không gặp khó khăn."
                    : params.locale === "zh"
                      ? "通过这些创新解决方案，我们开创了一个任何人都可以毫无负担地选择天花板氛围灯施工的时代。"
                      : "ผ่านโซลูชันนวัตกรรมเหล่านี้ เราได้เปิดยุคที่ทุกคนสามารถเลือกการก่อสร้างไฟสร้างบรรยากาศบนเพดานได้โดยไม่มีภาระ"}
            </p>

            <p className="text-gray-700 mb-4">
              {params.locale === "ko"
                ? "오늘날, 우물천장 무드등은 아파트 조명 인테리어의 필수 요소로 자리 잡았으며, 이 변화의 시작에는 주식회사 엘엔피가 있습니다."
                : params.locale === "en"
                  ? "Today, ceiling mood lighting has established itself as an essential element of apartment lighting interior, and LNP Corporation is at the beginning of this change."
                  : params.locale === "vi"
                    ? "Ngày nay, đèn tạo không khí trần đã trở thành một yếu tố thiết yếu của nội thất chiếu sáng căn hộ, và Công ty LNP là khởi đầu của sự thay đổi này."
                    : params.locale === "zh"
                      ? "如今，天花板氛围灯已成为公寓照明内饰的必要元素，LNP公司是这一变革的开始。"
                      : "ปัจจุบัน ไฟสร้างบรรยากาศบนเพดานได้กลายเป็นองค์ประกอบสำคัญของการตกแต่งภายในด้วยแสงสว่างในอพาร์ทเมนท์ และบริษัท LNP อยู่ที่จุดเริ่มต้นของการเปลี่ยนแปลงนี้"}
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">
                {params.locale === "ko"
                  ? "핵심 가치 (Core Values)"
                  : params.locale === "en"
                    ? "Core Values"
                    : params.locale === "vi"
                      ? "Giá trị cốt lõi"
                      : params.locale === "zh"
                        ? "核心价值"
                        : "ค่านิยมหลัก"}
              </h3>
              <ol className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">
                    {params.locale === "ko"
                      ? "1. 고객 중심 (Customer Focus)"
                      : params.locale === "en"
                        ? "1. Customer Focus"
                        : params.locale === "vi"
                          ? "1. Tập trung vào khách hàng"
                          : params.locale === "zh"
                            ? "1. 以客户为中心"
                            : "1. มุ่งเน้นลูกค้า"}
                  </span>{" "}
                  -
                  {params.locale === "ko"
                    ? "고객의 눈높이에서 생각하고, 고객의 편의를 최우선으로 고려합니다."
                    : params.locale === "en"
                      ? "We think from the customer's perspective and prioritize customer convenience."
                      : params.locale === "vi"
                        ? "Chúng tôi suy nghĩ từ góc độ của khách hàng và ưu tiên sự tiện lợi của khách hàng."
                        : params.locale === "zh"
                          ? "我们从客户的角度思考，优先考虑客户的便利。"
                          : "เราคิดจากมุมมองของลูกค้าและให้ความสำคัญกับความสะดวกของลูกค้า"}
                </li>
                <li>
                  <span className="font-semibold">
                    {params.locale === "ko"
                      ? "2. 품질 혁신 (Quality Innovation)"
                      : params.locale === "en"
                        ? "2. Quality Innovation"
                        : params.locale === "vi"
                          ? "2. Đổi mới chất lượng"
                          : params.locale === "zh"
                            ? "2. 质量创新"
                            : "2. นวัตกรรมคุณภาพ"}
                  </span>{" "}
                  -
                  {params.locale === "ko"
                    ? "견고한 제품력과 안정적인 품질을 바탕으로 시장을 선도합니다."
                    : params.locale === "en"
                      ? "We lead the market based on solid product power and stable quality."
                      : params.locale === "vi"
                        ? "Chúng tôi dẫn đầu thị trường dựa trên sức mạnh sản phẩm vững chắc và chất lượng ổn định."
                        : params.locale === "zh"
                          ? "我们基于坚实的产品力和稳定的质量引领市场。"
                          : "เรานำตลาดด้วยพลังผลิตภัณฑ์ที่แข็งแกร่งและคุณภาพที่มั่นคง"}
                </li>
                <li>
                  <span className="font-semibold">
                    {params.locale === "ko"
                      ? "3. 합리적 가치 제공 (Reasonable Value Offering)"
                      : params.locale === "en"
                        ? "3. Reasonable Value Offering"
                        : params.locale === "vi"
                          ? "3. Cung cấp giá trị hợp lý"
                          : params.locale === "zh"
                            ? "3. 提供合理价值"
                            : "3. การนำเสนอคุณค่าที่สมเหตุสมผล"}
                  </span>{" "}
                  -
                  {params.locale === "ko"
                    ? "높은 품질과 합리적인 가격을 동시에 실현하여, 누구나 부담 없이 선택할 수 있는 제품을 만듭니다."
                    : params.locale === "en"
                      ? "We create products that anyone can choose without burden by simultaneously realizing high quality and reasonable prices."
                      : params.locale === "vi"
                        ? "Chúng tôi tạo ra các sản phẩm mà bất kỳ ai cũng có thể lựa chọn mà không gặp khó khăn bằng cách đồng thời thực hiện chất lượng cao và giá cả hợp lý."
                        : params.locale === "zh"
                          ? "我们通过同时实现高质量和合理价格，创造任何人都可以毫无负担地选择的产品。"
                          : "เราสร้างผลิตภัณฑ์ที่ทุกคนสามารถเลือกได้โดยไม่มีภาระด้วยการทำให้คุณภาพสูงและราคาที่สมเหตุสมผลเกิดขึ้นพร้อมกัน"}
                </li>
                <li>
                  <span className="font-semibold">
                    {params.locale === "ko"
                      ? "4. 지속적인 성장과 도전 (Continuous Growth & Challenge)"
                      : params.locale === "en"
                        ? "4. Continuous Growth & Challenge"
                        : params.locale === "vi"
                          ? "4. Tăng trưởng và thách thức liên tục"
                          : params.locale === "zh"
                            ? "4. 持续增长与挑战"
                            : "4. การเติบโตและความท้าทายอย่างต่อเนื่อง"}
                  </span>{" "}
                  -
                  {params.locale === "ko"
                    ? "트렌드에 머무르지 않고 끊임없이 개선하고, 새로운 도약을 위해 도전합니다."
                    : params.locale === "en"
                      ? "We continuously improve without staying in trends and challenge for new leaps."
                      : params.locale === "vi"
                        ? "Chúng tôi liên tục cải tiến mà không dừng lại ở xu hướng và thách thức cho những bước nhảy vọt mới."
                        : params.locale === "zh"
                          ? "我们不停留在趋势中，不断改进，挑战新的飞跃。"
                          : "เราปรับปรุงอย่างต่อเนื่องโดยไม่หยุดอยู่กับเทรนด์และท้าทายเพื่อก้าวกระโดดใหม่"}
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
                      : params.locale === "zh"
                        ? "未来的承诺"
                        : "คำมั่นสัญญาในอนาคต"}
              </h3>
              <p className="text-gray-700">
                {params.locale === "ko"
                  ? "주식회사 엘엔피는 앞으로도 조명과 인테리어 분야에서 새로운 가치를 창출하며, 고객 여러분과 함께 성장해 나가겠습니다."
                  : params.locale === "en"
                    ? "LNP Corporation will continue to create new value in the lighting and interior fields and grow together with our customers."
                    : params.locale === "vi"
                      ? "Công ty LNP sẽ tiếp tục tạo ra giá trị mới trong lĩnh vực chiếu sáng và nội thất và phát triển cùng với khách hàng của chúng tôi."
                      : params.locale === "zh"
                        ? "LNP公司将继续在照明和室内装饰领域创造新价值，与客户共同成长。"
                        : "บริษัท LNP จะสร้างคุณค่าใหม่ในด้านแสงสว่างและการตกแต่งภายในอย่างต่อเนื่องและเติบโตไปพร้อมกับลูกค้าของเรา"}
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
              <p>{params.locale === "vi" ? viTranslations.historyItem2023_1 : t.historyItem2023_1}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2023_2 : t.historyItem2023_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2022</div>
            <div className="text-gray-700">
              <p>{params.locale === "vi" ? viTranslations.historyItem2022_1 : t.historyItem2022_1}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2022_2 : t.historyItem2022_2}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2022_3 : t.historyItem2022_3}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2021</div>
            <div className="text-gray-700">
              <p>{params.locale === "vi" ? viTranslations.historyItem2021_1 : t.historyItem2021_1}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2021_2 : t.historyItem2021_2}</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2020</div>
            <div className="text-gray-700">
              {params.locale === "vi" ? viTranslations.historyItem2020_1 : t.historyItem2020_1}
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute -left-10 w-6 h-6 bg-black rounded-full"></div>
            <div className="font-bold text-2xl mb-2">2019</div>
            <div className="text-gray-700">
              <p>{params.locale === "vi" ? viTranslations.historyItem2019_1 : t.historyItem2019_1}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2019_2 : t.historyItem2019_2}</p>
              <p>{params.locale === "vi" ? viTranslations.historyItem2019_3 : t.historyItem2019_3}</p>
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-D3RkMKsBiZakljFRqIKcl8HzxQHap6.jpeg"
                alt="특허증 - 우물천장 조립체"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 우물천장 조립체</p>
          </div>

          {/* 이미지 2 - 우물천장 직간접 조명시스템 특허증 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-7xAjdW0zcmnpaE2A7SU47tFM1ieYQc.jpeg"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-JLRtXCXdyqUUcxpEtZnIwfTpz1wUOH.jpeg"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Ts4smtQvQBhMH7cWjU5MqwH53I4dcC.jpeg"
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-zM5FIQLBaeSoqGel3XbPHcEKMTd37r.jpeg"
                alt="특허증 - 무선 조명 제어 장치"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">특허증 - 무선 조명 제어 장치</p>
          </div>

          {/* 이미지 6 - 연구개발전담부서 인정서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-wPNwQJcc1ptXz2ATeGmhC4JbD9frdz.jpeg"
                alt="연구개발전담부서 인정서"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">연구개발전담부서 인정서</p>
          </div>

          {/* 이미지 7 - 안전인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-A26ekncwaJ9LHFLBBa2qEd9OZeTKiZ.jpeg"
                alt="안전인증서 (KTR)"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-center text-gray-700">안전인증서 (KTR)</p>
          </div>

          {/* 이미지 8 - 방송통신기자재 적합인증서 */}
          <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-xTrK8dIs2FXRnjPVCwZWe15WhpMk4E.jpeg"
                alt="방송통신기자재 적합인증서"
                fill
                className="object-contain"
              />
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
