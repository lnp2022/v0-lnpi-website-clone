"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Lock } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  // 입력 필드 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  // 로그인 핸들러
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!credentials.username || !credentials.password) {
      toast({
        title: "입력 오류",
        description: "아이디와 비밀번호를 모두 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // 실제 구현에서는 여기에 로그인 API 호출 로직 추가
      // 예시: 서버에 인증 요청 후 세션/쿠키 설정

      // 로그인 시뮬레이션 (실제 구현 시 이 부분을 API 호출로 대체)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 임시 로그인 검증 (실제 구현에서는 서버에서 검증)
      if (credentials.username === "admin" && credentials.password === "password") {
        toast({
          title: "로그인 성공",
          description: "관리자 페이지로 이동합니다.",
        })

        // 관리자 페이지로 리다이렉트
        router.push("/ko/admin")
      } else {
        toast({
          title: "로그인 실패",
          description: "아이디 또는 비밀번호가 올바르지 않습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error)
      toast({
        title: "로그인 실패",
        description: "로그인 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">관리자 로그인</CardTitle>
          <CardDescription className="text-center">자료실 관리를 위한 관리자 계정으로 로그인하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="font-medium">
                아이디
              </label>
              <Input
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="관리자 아이디 입력"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="font-medium">
                비밀번호
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="비밀번호 입력"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Lock className="mr-2 h-4 w-4 animate-pulse" />
                  로그인 중...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  로그인
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">* 테스트용 계정: admin / password</p>
        </CardFooter>
      </Card>
    </div>
  )
}
