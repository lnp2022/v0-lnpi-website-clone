"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, Trash2 } from "lucide-react"

export default function AdminPage() {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [resourceData, setResourceData] = useState({
    title: "",
    category: "",
    description: "",
  })

  // 자료 카테고리 옵션
  const categories = [
    { value: "catalog", label: "카탈로그" },
    { value: "installation-guide", label: "설치 가이드" },
    { value: "user-manual", label: "사용 설명서" },
    { value: "product-info", label: "제품 안내" },
  ]

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  // 입력 필드 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setResourceData((prev) => ({ ...prev, [name]: value }))
  }

  // 카테고리 선택 핸들러
  const handleCategoryChange = (value: string) => {
    setResourceData((prev) => ({ ...prev, category: value }))
  }

  // 자료 업로드 핸들러
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedFile) {
      toast({
        title: "파일을 선택해주세요",
        description: "업로드할 파일을 선택해주세요.",
        variant: "destructive",
      })
      return
    }

    if (!resourceData.title || !resourceData.category) {
      toast({
        title: "필수 정보를 입력해주세요",
        description: "제목과 카테고리는 필수 입력 항목입니다.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // 실제 구현에서는 여기에 파일 업로드 및 데이터베이스 저장 로직 추가
      // 예시: FormData를 사용하여 파일과 메타데이터를 서버에 전송

      // 파일 업로드 시뮬레이션 (실제 구현 시 이 부분을 API 호출로 대체)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "업로드 성공",
        description: `${resourceData.title} 자료가 성공적으로 업로드되었습니다.`,
      })

      // 폼 초기화
      setSelectedFile(null)
      setResourceData({
        title: "",
        category: "",
        description: "",
      })

      // 파일 입력 필드 초기화 (React에서는 직접 value를 변경할 수 없어 이런 방식 사용)
      const fileInput = document.getElementById("file-upload") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    } catch (error) {
      console.error("업로드 중 오류 발생:", error)
      toast({
        title: "업로드 실패",
        description: "자료 업로드 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">관리자 페이지</h1>
      <p className="text-gray-600 mb-8 text-center">자료실 관리 및 자료 업로드</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 자료 업로드 폼 */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>자료 업로드</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="font-medium">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={resourceData.title}
                    onChange={handleInputChange}
                    placeholder="자료 제목을 입력하세요"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="font-medium">
                    카테고리 <span className="text-red-500">*</span>
                  </label>
                  <Select value={resourceData.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="font-medium">
                    자료 설명
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={resourceData.description}
                    onChange={handleInputChange}
                    placeholder="자료에 대한 설명을 입력하세요"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="file-upload" className="font-medium">
                    파일 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
                      className="flex-1"
                    />
                    {selectedFile && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setSelectedFile(null)}
                        title="파일 선택 취소"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {selectedFile && (
                    <p className="text-sm text-gray-500">
                      선택된 파일: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      업로드 중...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      자료 업로드
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* 사이드바 - 도움말 및 가이드 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>업로드 가이드</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">지원 파일 형식</h3>
                  <p className="text-sm text-gray-600">PDF, Word, Excel, PowerPoint, ZIP</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">최대 파일 크기</h3>
                  <p className="text-sm text-gray-600">50MB</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">파일명 규칙</h3>
                  <p className="text-sm text-gray-600">
                    한글, 영문, 숫자, 언더바(_)만 사용하세요. 공백은 자동으로 언더바로 변환됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">필수 입력 항목</h3>
                  <p className="text-sm text-gray-600">제목, 카테고리, 파일은 필수 입력 항목입니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>최근 업로드 자료</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="font-medium">GUGU 무선 스위치 카탈로그</span>
                  <p className="text-xs text-gray-500">2025-04-23 | 카탈로그</p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">우물천장 프레임 시공 가이드</span>
                  <p className="text-xs text-gray-500">2025-04-20 | 설치 가이드</p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">GUGU 무선 스위치 앱 사용 설명서</span>
                  <p className="text-xs text-gray-500">2025-04-15 | 사용 설명서</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 자료 관리 섹션 */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>자료 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-500 py-8">
              자료 관리 기능은 데이터베이스 연결 후 사용 가능합니다.
              <br />
              실제 구현 시 이 부분에 자료 목록, 수정, 삭제 기능이 추가됩니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
