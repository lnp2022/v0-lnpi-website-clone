import { type NextRequest, NextResponse } from "next/server"

const locales = ["ko", "en", "vi", "th", "zh"]
const defaultLocale = "ko"

export function middleware(request: NextRequest) {
  // 현재 요청 경로 가져오기
  const pathname = request.nextUrl.pathname

  // 이미 로케일이 있는 경로인지 확인
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // 로케일이 없는 경우 기본 로케일로 리다이렉트
  if (!pathnameHasLocale) {
    // 사용자 브라우저 언어 설정 확인
    const acceptLanguage = request.headers.get("accept-language") || ""
    const browserLocale = acceptLanguage.split(",")[0].split("-")[0]

    // 지원하는 로케일인지 확인
    const locale = locales.includes(browserLocale) ? browserLocale : defaultLocale

    // 새 URL 생성
    const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`, request.url)

    // 리다이렉트
    return NextResponse.redirect(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 모든 경로 매칭, 단 다음은 제외:
    // - api 경로
    // - _next 경로
    // - 정적 파일 경로 (이미지, 아이콘 등)
    "/((?!api|_next|.*\\..*).*)",
  ],
}
