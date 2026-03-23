"use client"

import { useTranslations } from "@/lib/translations"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, use } from "react" // ✅ use를 추가했습니다.

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }> // ✅ Promise 타입으로 수정했습니다.
}) {
  // ✅ 아래 한 줄로 locale과 id를 안전하게 가져옵니다.
  const { locale, id: paramsId } = use(params)
  const t = useTranslations(locale)
  const productId = Number.parseInt(paramsId)
  const [mainImage, setMainImage] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)
  const [showInstallationGuide, setShowInstallationGuide] = useState(false)

  // 제품 데이터 (실제로는 API나 데이터베이스에서 가져올 것)
  const products = [
    {
      id: 1,
      name:
        locale === "ko"
          ? "한방 우물 갈매기 몰딩용 프레임"
          : locale === "en"
            ? "Seagull Type Single Ceiling Frame"
            : locale === "vi"
              ? "Khung trần đơn kiểu hải âu"
              : "เฟรมเพดานเดี่ยวแบบนกนางนวล",
      description:
        locale === "ko"
          ? "갈매기 몰딩으로 시공 되어 있는 우물천장에 설치 할 수 있도록 특화 된 디자인"
          : locale === "en"
            ? "Specialized design for installation on ceiling with seagull molding"
            : locale === "vi"
              ? "Thiết kế chuyên biệt để lắp đặt trên trần với đúc hải âu"
              : "การออกแบบเฉพาะสำหรับการติดตั้งบนเพดานที่มีการขึ้นรูปแบบนกนางนวล",
      features: [
        locale === "ko"
          ? "난연 PC 재질"
          : locale === "en"
            ? "Flame retardant PC material"
            : locale === "vi"
              ? "Vật liệu PC chống cháy"
              : "วัสดุ PC หน่วงไฟ",

        locale === "ko"
          ? "쉬운 설치"
          : locale === "en"
            ? "Easy installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : "ติดตั้งง่าย",

        locale === "ko"
          ? "길이 1.5M로 편리한 이동성"
          : locale === "en"
            ? "Convenient mobility with 1.5M length"
            : locale === "vi"
              ? "Di chuyển thuận tiện với chiều dài 1,5M"
              : "การเคลื่อนย้ายสะดวกด้วยความยาว 1.5 เมตร",

        locale === "ko"
          ? "1박스(18개) 단위로 판매"
          : locale === "en"
            ? "Sold in units of 1 box (18 pieces)"
            : locale === "vi"
              ? "Bán theo đơn vị 1 hộp (18 cái)"
              : "จำหน่ายเป็นหน่วยกล่อง (18 ชิ้น)",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PC"
            : locale === "en"
              ? "Flame retardant PC"
              : locale === "vi"
                ? "PC chống cháy"
                : "PC หน่วงไฟ",
        size: "53 x 56 x 1500mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-I0gR6bbevDLE2GuVQ3TNhZ8JRwks6j.png",
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/002%20%282%29-znH45SbsAG11QvolEu8nfGeZVCfRYo.png", // 갤러리 이미지 1을 새 이미지로 변경
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Zrul0cRkU3IetmkmqikCibd1CCp18H.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-EVIZ9BqjXnlst0v944DpEqL95bhve3.jpeg",
      ],
    },
    {
      id: 2,
      name:
        locale === "ko"
          ? "한방 우물 일반(직각)몰딩 프레임"
          : locale === "en"
            ? "Standard Single Ceiling Frame"
            : locale === "vi"
              ? "Khung trần đơn tiêu chuẩn"
              : "เฟรมเพดานเดี่ยวมาตรฐาน",
      description:
        locale === "ko"
          ? "일반적인 직각형 우물천장에 쉽게 설치 할 수 있도록 특화 된 디자인"
          : locale === "en"
            ? "Specialized design for easy installation on standard rectangular ceiling"
            : locale === "vi"
              ? "Thiết kế chuyên biệt để dễ dàng lắp đặt trên trần hình chữ nhật tiêu chuẩn"
              : "การออกแบบเฉพาะสำหรับการติดตั้งง่ายบนเพดานสี่เหลี่ยมมาตรฐาน",
      features: [
        locale === "ko"
          ? "난연 PC 재질"
          : locale === "en"
            ? "Flame retardant PC material"
            : locale === "vi"
              ? "Vật liệu PC chống cháy"
              : "วัสดุ PC หน่วงไฟ",

        locale === "ko"
          ? "쉬운 설치"
          : locale === "en"
            ? "Easy installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : "ติดตั้งง่าย",

        locale === "ko"
          ? "길이 1.5M로 편리한 이동성"
          : locale === "en"
            ? "Convenient mobility with 1.5M length"
            : locale === "vi"
              ? "Di chuyển thuận tiện với chiều dài 1,5M"
              : "การเคลื่อนย้ายสะดวกด้วยความยาว 1.5 เมตร",

        locale === "ko"
          ? "1박스(18개) 단위로 판매"
          : locale === "en"
            ? "Sold in units of 1 box (18 pieces)"
            : locale === "vi"
              ? "Bán theo đơn vị 1 hộp (18 cái)"
              : "จำหน่ายเป็นหน่วยกล่อง (18 ชิ้น)",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PC"
            : locale === "en"
              ? "Flame retardant PC"
              : locale === "vi"
                ? "PC chống cháy"
                : "PC หน่วงไฟ",
        size: "53 x 56 x 1500mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
      },
      image: "/images/ceiling-frame/normal-frame-main.png",
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/007-TdNLGzQB16RKgKCuRhrqGNKdPtaA29.png", // 갤러리 이미지 1을 새 이미지로 변경
        "/images/ceiling-frame/normal-frame-2.jpeg",
        "/images/ceiling-frame/normal-frame-3.jpeg",
      ],
    },
    {
      id: 3,
      name:
        locale === "ko"
          ? "일반 시트지 래핑 프레임"
          : locale === "en"
            ? "Sheet Wrapping Ceiling Frame"
            : locale === "vi"
              ? "Khung trần bọc tấm"
              : "เฟรมเพดานห่อแผ่น",
      description:
        locale === "ko"
          ? "일반적인 직각형 우물천장에 쉽게 설치 할 수 있도록 특화 된 디자인"
          : locale === "en"
            ? "Specialized design for easy installation on standard rectangular ceiling"
            : locale === "vi"
              ? "Thiết kế chuyên biệt để dễ dàng lắp đặt trên trần hình chữ nhật tiêu chuẩn"
              : "การออกแบบเฉพาะสำหรับการติดตั้งง่ายบนเพดานสี่เหลี่ยมมาตรฐาน",
      features: [
        locale === "ko"
          ? "난연 PVC 재질"
          : locale === "en"
            ? "Flame retardant PVC material"
            : locale === "vi"
              ? "Vật liệu PVC chống cháy"
              : "วัสดุ PVC หน่วงไฟ",

        locale === "ko"
          ? "쉬운 설치"
          : locale === "en"
            ? "Easy installation"
            : locale === "vi"
              ? "Dễ dàng lắp đặt"
              : "ติดตั้งง่าย",

        locale === "ko"
          ? "시트지 래핑 처리가 되어 있어 이질감 없음"
          : locale === "en"
            ? "No sense of difference with sheet wrapping treatment"
            : locale === "vi"
              ? "Không có cảm giác khác biệt với xử lý bọc tấm"
              : "ไม่มีความรู้สึกแตกต่างด้วยการเคลือบแผ่น",

        locale === "ko"
          ? "1.2미터~2.2미터 까지 1박스(30개) 단위로 판매\n2.4미터~3.5미터 까지 1박스(20개) 단위로 판매"
          : locale === "en"
            ? "Sold in units of 1 box (30 pieces) from 1.2 meters to 2.2 meters\nSold in units of 1 box (20 pieces) from 2.4 meters to 3.5 meters"
            : locale === "vi"
              ? "Bán theo đơn vị 1 hộp (30 cái) từ 1,2 mét đến 2,2 mét\nBán theo đơn vị 1 hộp (20 cái) từ 2,4 mét đến 3,5 mét"
              : "จำหน่ายเป็นหน่วยกล่อง (30 ชิ้น) ตั้งแต่ 1.2 เมตรถึง 2.2 เมตร\nจำหน่ายเป็นหน่วยกล่อง (20 ชิ้น) ตั้งแต่ 2.4 เมตรถึง 3.5 เมตร",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size:
          locale === "ko"
            ? "43 x 50 x 1200mm부터 200mm 단위로 3500mm 까지 가능"
            : locale === "en"
              ? "43 x 50 x 1200mm to 3500mm in 200mm increments"
              : locale === "vi"
                ? "43 x 50 x 1200mm đến 3500mm theo gia số 200mm"
                : "43 x 50 x 1200mm ถึง 3500mm เพิ่มขึ้นทีละ 200mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
      },
      image: "/images/ceiling-frame/wrapping-frame-main.png",
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wrapping-frame-1-UpAlGHxzTb4UG2wddZivUmrWtJlXJD.png",
        "/images/ceiling-frame/wrapping-frame-2.jpeg",
        "/images/ceiling-frame/wrapping-frame-3.jpeg",
      ],
    },
    {
      id: 4,
      name:
        locale === "ko"
          ? "한방 프레임 롤 커버"
          : locale === "en"
            ? t.rollCoverName
            : locale === "vi"
              ? t.rollCoverName
              : t.rollCoverName,
      description:
        locale === "ko"
          ? t.rollCoverDesc
          : locale === "en"
            ? t.rollCoverDesc
            : locale === "vi"
              ? t.rollCoverDesc
              : t.rollCoverDesc,
      features: [
        locale === "ko"
          ? "시트지 처리가 되어 있는 난연 PVC 소재"
          : locale === "en"
            ? "Flame retardant PVC material with sheet treatment"
            : locale === "vi"
              ? "Vật liệu PVC chống cháy với xử lý tấm"
              : "วัสดุ PVC หน่วงไฟที่ผ่านการเคลือบแผ่น",

        locale === "ko"
          ? "쉬운 설치 및 적용"
          : locale === "en"
            ? "Easy installation and application"
            : locale === "vi"
              ? "Dễ dàng lắp đặt và ứng dụng"
              : "ติดตั้งและใช้งานง่าย",

        locale === "ko"
          ? "길이 50M로 다양한 크기의 우물천장에 적합"
          : locale === "en"
            ? "Suitable for various sizes of ceiling with 50M length"
            : locale === "vi"
              ? "Phù hợp với nhiều kích thước trần với chiều dài 50M"
              : "เหมาะสำหรับเพดานหลากหลายขนาดด้วยความยาว 50 เมตร",

        locale === "ko"
          ? "내구성이 뛰어나 오랜 시간 사용 가능"
          : locale === "en"
            ? "Excellent durability for long-term use"
            : locale === "vi"
              ? "Độ bền xuất sắc để sử dụng lâu dài"
              : "ความทนทานยอดเยี่ยมสำหรับการใช้งานระยะยาว",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size: "50M",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
        type: "50m ROLL",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-SRDoGtKfVLHUbHih57duqMo9vF7rxC.png", // main.png
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/010-wxf0pF6Cv44DC6lvjOIVjgpl1tKJNJ.png", // 010.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/011-4MArMnPP3Ck9xwj3OudMstTFEY9Zty.png", // 011.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/012-t781WvhuEoASQgy5SBX0xxS6xFbOsY.png", // 012.png
      ],
    },
    {
      id: 5,
      name:
        locale === "ko"
          ? "한방 라운드 코너 마감재"
          : locale === "en"
            ? t.roundCornerName
            : locale === "vi"
              ? t.roundCornerName
              : t.roundCornerName,
      description:
        locale === "ko"
          ? t.roundCornerDesc
          : locale === "en"
            ? t.roundCornerDesc
            : locale === "vi"
              ? t.roundCornerDesc
              : t.roundCornerDesc,
      features: [
        locale === "ko"
          ? "표면 특수 처리로 이질감 없는 라운드 마감"
          : locale === "en"
            ? "Round finishing with no sense of difference due to special surface treatment"
            : locale === "vi"
              ? "Hoàn thiện tròn không có cảm giác khác biệt nhờ xử lý bề mặt đặc biệt"
              : "การตกแต่งแบบโค้งที่ไม่มีความรู้สึกแตกต่างด้วยการเคลือบผิวพิเศษ",

        locale === "ko"
          ? "난연 PVC 재질로 안전성 확보"
          : locale === "en"
            ? "Safety secured with flame retardant PVC material"
            : locale === "vi"
              ? "An toàn được đảm bảo với vật liệu PVC chống cháy"
              : "ความปลอดภัยที่มั่นคงด้วยวัสดุ PVC หน่วงไฟ",

        locale === "ko"
          ? "쉬운 설치 및 적용"
          : locale === "en"
            ? "Easy installation and application"
            : locale === "vi"
              ? "Dễ dàng lắp đặt và ứng dụng"
              : "ติดตั้งและใช้งานง่าย",

        locale === "ko"
          ? "한방 프레임과 완벽한 호환성"
          : locale === "en"
            ? "Perfect compatibility with single frame"
            : locale === "vi"
              ? "Tương thích hoàn hảo với khung đơn"
              : "ความเข้ากันได้อย่างสมบูรณ์กับเฟรมเดี่ยว",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size: "200mm x 200mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
        type:
          locale === "ko"
            ? "라운드형"
            : locale === "en"
              ? "Round type"
              : locale === "vi"
                ? "Loại tròn"
                : "แบบโค้ง",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-tib2C5qNMD923kTYTRLIkxrMdrK64C.png", // main.png
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/010-VeEXR6sbenOS0ntNJtLW32jwdTLNTP.jpeg", // 010.jpeg
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/011-GC82u3HyLJYf4vZcqsB4UgWtqaFMHF.png", // 011.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/012-VNudCFLWLcgH3ByMSbyBUHlSAceFWR.png", // 012.png
      ],
    },
    {
      id: 6,
      name:
        locale === "ko"
          ? "시트지 래핑 라운드 코너 마감재"
          : locale === "en"
            ? t.wrappingRoundCornerName
            : locale === "vi"
              ? t.wrappingRoundCornerName
              : t.wrappingRoundCornerName,
      description:
        locale === "ko"
          ? t.wrappingRoundCornerDesc
          : locale === "en"
            ? t.wrappingRoundCornerDesc
            : locale === "vi"
              ? t.wrappingRoundCornerDesc
              : t.wrappingRoundCornerDesc,
      features: [
        locale === "ko"
          ? "표면 특수 처리로 이질감 없는 라운드 마감"
          : locale === "en"
            ? "Round finishing with no sense of difference due to special surface treatment"
            : locale === "vi"
              ? "Hoàn thiện tròn không có cảm giác khác biệt nhờ xử lý bề mặt đặc biệt"
              : "การตกแต่งแบบโค้งที่ไม่มีความรู้สึกแตกต่างด้วยการเคลือบผิวพิเศษ",

        locale === "ko"
          ? "라운드 형태로 부드러운 코너 마감"
          : locale === "en"
            ? "Smooth corner finishing with round shape"
            : locale === "vi"
              ? "Hoàn thiện góc mượt mà với hình dạng tròn"
              : "การตกแต่งมุมที่เรียบลื่นด้วยรูปทรงโค้ง",

        locale === "ko"
          ? "난연 PVC 재질로 안전성 확보"
          : locale === "en"
            ? "Safety secured with flame retardant PVC material"
            : locale === "vi"
              ? "An toàn được đảm bảo với vật liệu PVC chống cháy"
              : "ความปลอดภัยที่มั่นคงด้วยวัสดุ PVC หน่วงไฟ",

        locale === "ko"
          ? "시트지 래핑 프레임과 완벽한 호환성"
          : locale === "en"
            ? "Perfect compatibility with sheet wrapping frame"
            : locale === "vi"
              ? "Tương thích hoàn hảo với khung bọc tấm"
              : "ความเข้ากันได้อย่างสมบูรณ์กับเฟรมห่อแผ่น",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size: "150mm x 150mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
        type:
          locale === "ko"
            ? "라운드형"
            : locale === "en"
              ? "Round type"
              : locale === "vi"
                ? "Loại tròn"
                : "แบบโค้ง",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-vLetrpzqBFOnX73b9gOKa9sHqm7iNN.png", // main.png
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/010-TSKc3gUkOUTcyIo3kXSu4uMEnPkgaO.png", // 010.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/011-TQ3By8zgJyj7ycnmOW3vfY3SpV8qW8.png", // 011.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/012-ZbQZVm0XbO9df88IHDF2aQiQIUIRxH.png", // 012.png
      ],
    },
    {
      id: 7,
      name:
        locale === "ko"
          ? "시트지 래핑 직각 코너 마감재"
          : locale === "en"
            ? t.wrappingSquareCornerName
            : locale === "vi"
              ? t.wrappingSquareCornerName
              : t.wrappingSquareCornerName,
      description:
        locale === "ko"
          ? t.wrappingSquareCornerDesc
          : locale === "en"
            ? t.wrappingSquareCornerDesc
            : locale === "vi"
              ? t.wrappingSquareCornerDesc
              : t.wrappingSquareCornerDesc,
      features: [
        locale === "ko"
          ? "표면 특수 처리로 이질감 없는 마감"
          : locale === "en"
            ? "Finishing with no sense of difference due to special surface treatment"
            : locale === "vi"
              ? "Hoàn thiện không có cảm giác khác biệt nhờ xử lý bề mặt đặc biệt"
              : "การตกแต่งที่ไม่มีความรู้สึกแตกต่างด้วยการเคลือบผิวพิเศษ",

        locale === "ko"
          ? "직각 형태로 깔끔한 코너 마감"
          : locale === "en"
            ? "Clean corner finishing with square shape"
            : locale === "vi"
              ? "Hoàn thiện góc sạch sẽ với hình dạng vuông"
              : "การตกแต่งมุมที่สะอาดด้วยรูปทรงสี่เหลี่ยม",

        locale === "ko"
          ? "난연 PVC 재질로 안전성 확보"
          : locale === "en"
            ? "Safety secured with flame retardant PVC material"
            : locale === "vi"
              ? "An toàn được đảm bảo với vật liệu PVC chống cháy"
              : "ความปลอดภัยที่มั่นคงด้วยวัสดุ PVC หน่วงไฟ",

        locale === "ko"
          ? "시트지 래핑 프레임과 완벽한 호환성"
          : locale === "en"
            ? "Perfect compatibility with sheet wrapping frame"
            : locale === "vi"
              ? "Tương thích hoàn hảo với khung bọc tấm"
              : "ความเข้ากันได้อย่างสมบูรณ์กับเฟรมห่อแผ่น",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size: "100mm x 100mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
        type:
          locale === "ko"
            ? "직각형"
            : locale === "en"
              ? "Square type"
              : locale === "vi"
                ? "Loại vuông"
                : "แบบฉาก",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-6RcppSmBgvGHtSUvlll0RGqNFMTwfE.png", // main.png
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/010-HXGlxiLGGlU6FcO9Bkn6i3BsRG9MmE.png", // 010.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/011-mWWVPo5R1JPwZoojFasaqLySMPSLvq.png", // 011.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/012-jqBLKXWbT9o5Luh8muu4NFHRF05vKN.png", // 012.png
      ],
    },
    {
      id: 8,
      name:
        locale === "ko"
          ? "시트지 래핑 중간 마감재"
          : locale === "en"
            ? t.wrappingMiddleFinishingName
            : locale === "vi"
              ? t.wrappingMiddleFinishingName
              : t.wrappingMiddleFinishingName,
      description:
        locale === "ko"
          ? t.wrappingMiddleFinishingDesc
          : locale === "en"
            ? t.wrappingMiddleFinishingDesc
            : locale === "vi"
              ? t.wrappingMiddleFinishingDesc
              : t.wrappingMiddleFinishingDesc,
      features: [
        locale === "ko"
          ? "표면 특수 처리로 이질감 없는 마감"
          : locale === "en"
            ? "Finishing with no sense of difference due to special surface treatment"
            : locale === "vi"
              ? "Hoàn thiện không có cảm giác khác biệt nhờ xử lý bề mặt đặc biệt"
              : "การตกแต่งที่ไม่มีความรู้สึกแตกต่างด้วยการเคลือบผิวพิเศษ",

        locale === "ko"
          ? "중간 연결 부분의 완벽한 마감 처리"
          : locale === "en"
            ? "Perfect finishing of middle connection part"
            : locale === "vi"
              ? "Hoàn thiện hoàn hảo phần kết nối giữa"
              : "การตกแต่งที่สมบูรณ์แบบของส่วนเชื่อมต่อตรงกลาง",

        locale === "ko"
          ? "난연 PVC 재질로 안전성 확보"
          : locale === "en"
            ? "Safety secured with flame retardant PVC material"
            : locale === "vi"
              ? "An toàn được đảm bảo với vật liệu PVC chống cháy"
              : "ความปลอดภัยที่มั่นคงด้วยวัสดุ PVC หน่วงไฟ",

        locale === "ko"
          ? "시트지 래핑 프레임과 완벽한 호환성"
          : locale === "en"
            ? "Perfect compatibility with sheet wrapping frame"
            : locale === "vi"
              ? "Tương thích hoàn hảo với khung bọc tấm"
              : "ความเข้ากันได้อย่างสมบูรณ์กับเฟรมห่อแผ่น",
      ],
      specifications: {
        material:
          locale === "ko"
            ? "난연 PVC"
            : locale === "en"
              ? "Flame retardant PVC"
              : locale === "vi"
                ? "PVC chống cháy"
                : "PVC หน่วงไฟ",
        size: "100mm",
        color:
          locale === "ko"
            ? "화이트"
            : locale === "en"
              ? "White"
              : locale === "vi"
                ? "Trắng"
                : "ขาว",
        type:
          locale === "ko"
            ? "중간 마감형"
            : locale === "en"
              ? "Middle finishing type"
              : locale === "vi"
                ? "Loại hoàn thiện giữa"
                : "แบบตกแต่งตรงกลาง",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-3cHKvWIIzVhCijVoj4BQ2pL2ZbM269.png", // main.png
      gallery: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/010-v54k5uOjNmbJ6sbY7AlDmzd437jx7F.png", // 010.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/011-C9NSOtFPVDbIhDb88360Q0gtGQuUH9.png", // 011.png
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/012-5uaqg2y0HduRa6mjMTUqsGRSFtyc8N.png", // 012.png
      ],
    },
  ]

  const product = products.find((p) => p.id === productId) || products[0]

  // 페이지 로드 시 메인 이미지 설정
  useEffect(() => {
    setMainImage(product.image)
  }, [product.image])

  // 썸네일 클릭 시 메인 이미지 변경
  const handleThumbnailClick = (img: string) => {
    setMainImage(img)
  }

  // 설치 가이드 이미지 URL을 제품 ID에 따라 반환하는 함수
  const getInstallationGuideImage = (id: number) => {
    switch (id) {
      case 1:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-koQs1byIhYLIIcJimFUzNEBhViiGJd.jpeg" // 첨부파일 1.jpg
      case 2:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ppaNNhgRsoz35SVCexWzyueCZJUlWL.jpeg" // 첨부파일 2.jpg (우물천장 무드등 시공 방법)
      case 3:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-lpz7iI4UK6tIhdfQ2SgDMDXOCWNFrP.png"
        // 첨부파일 3.jpg
      default:
        return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-koQs1byIhYLIIcJimFUzNEBhViiGJd.jpeg" // 기본값으로 첨부파일 1.jpg
    }
  }

  // 설치 가이드 다운로드 함수
  const downloadInstallationGuide = () => {
    setIsDownloading(true)

    // 모달 창에 이미지 표시
    setShowInstallationGuide(true)

    setIsDownloading(false)
  }

  // 모달 닫기 함수 추가
  const closeInstallationGuide = () => {
    setShowInstallationGuide(false)
  }

  // 설치 가이드 버튼을 표시할지 여부 결정 (ID 1, 2, 3만 표시)
  const showInstallationGuideButton = productId <= 3

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 뒤로 가기 버튼 */}
      <Link href={`/${locale}/products/ceiling-frame`}>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToProducts}
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 제품 이미지 */}
        <div>
          <div className="relative aspect-square bg-gray-100 mb-4">
            <Image src={mainImage || product.image} alt={product.name} fill className="object-contain" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productId === 4 || productId === 5 || productId === 6 || productId === 7 || productId === 8
              ? product.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-100 cursor-pointer"
                    onClick={() => handleThumbnailClick(img)}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))
              : [product.image, ...product.gallery].slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-gray-100 cursor-pointer"
                    onClick={() => handleThumbnailClick(img)}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
          </div>
        </div>

        {/* 제품 정보 */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{locale === "zh" ? "主要特点" : t.productFeatures}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {locale === "zh"
                    ? index === 0
                      ? "阻燃材料"
                      : index === 1
                        ? "易于安装"
                        : index === 2
                          ? "便捷的移动性，长度为1.5米"
                          : "以1盒(18件)为单位销售"
                    : feature.includes("\n")
                      ? feature.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < feature.split("\n").length - 1 && <br />}
                          </span>
                        ))
                      : feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {locale === "zh" ? "产品规格" : t.productSpecifications}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <span className="font-medium">
                    {locale === "zh"
                      ? key === "material"
                        ? "材料"
                        : key === "size"
                          ? "尺寸"
                          : key === "color"
                            ? "颜色"
                            : key === "type"
                              ? "类型"
                              : key === "weight"
                                ? "重量"
                                : key
                      : t[key as keyof typeof t] || key}
                    : {""}
                  </span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Link href={`/${locale}/consultation?product=${encodeURIComponent(product.name)}`}>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg mb-4">
              {locale === "zh" ? "咨询" : t.inquire}
            </Button>
          </Link>

          {showInstallationGuideButton && (
            <Button
              variant="outline"
              className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 py-6 text-lg flex items-center justify-center"
              onClick={downloadInstallationGuide}
              disabled={isDownloading}
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading
                ? locale === "zh"
                  ? "加载中..."
                  : t.loading
                : locale === "zh"
                  ? "查看天花板氛围灯安装指南"
                  : t.installationGuideButton}
            </Button>
          )}

          <div className="mt-4 text-sm text-gray-500 text-center">
            {locale === "zh" ? '* 要保存图片，右键点击打开的图片并选择"另存为图片"。' : t.saveImageInstruction}
          </div>
        </div>
      </div>
      {/* 설치 가이드 모달 */}
      {showInstallationGuide && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeInstallationGuide}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10"
              onClick={closeInstallationGuide}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-1">
              <img
                src={getInstallationGuideImage(productId) || "/placeholder.svg"}
                alt={`${product.name} 설치 가이드`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
