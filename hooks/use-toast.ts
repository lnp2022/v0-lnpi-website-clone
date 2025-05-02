"use client"

import { useState, useEffect, useCallback } from "react"

type ToastType = {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
}

type ToastOptions = Omit<ToastType, "id">

export function useToast() {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const toast = useCallback(({ title, description, variant = "default", duration = 3000 }: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description, variant, duration }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // 자동으로 토스트 제거
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  // 컴포넌트 렌더링
  useEffect(() => {
    if (toasts.length > 0) {
      const toastContainer = document.getElementById("toast-container")

      if (!toastContainer) {
        const container = document.createElement("div")
        container.id = "toast-container"
        container.className = "fixed top-4 right-4 z-50 flex flex-col gap-2"
        document.body.appendChild(container)
      }

      return () => {
        const container = document.getElementById("toast-container")
        if (container && toasts.length === 0) {
          document.body.removeChild(container)
        }
      }
    }
  }, [toasts])

  // 토스트 렌더링
  useEffect(() => {
    const container = document.getElementById("toast-container")

    if (container) {
      // 기존 토스트 제거
      container.innerHTML = ""

      // 새 토스트 추가
      toasts.forEach((toast) => {
        const toastElement = document.createElement("div")
        toastElement.className = `bg-white border rounded-md shadow-md p-4 mb-2 transform transition-all duration-300 ease-in-out ${
          toast.variant === "destructive" ? "border-red-500" : "border-gray-200"
        }`

        const titleElement = document.createElement("div")
        titleElement.className = `font-semibold ${toast.variant === "destructive" ? "text-red-600" : "text-gray-900"}`
        titleElement.textContent = toast.title

        toastElement.appendChild(titleElement)

        if (toast.description) {
          const descriptionElement = document.createElement("div")
          descriptionElement.className = "text-sm text-gray-600 mt-1"
          descriptionElement.textContent = toast.description
          toastElement.appendChild(descriptionElement)
        }

        // 닫기 버튼
        const closeButton = document.createElement("button")
        closeButton.className = "absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        closeButton.innerHTML = "×"
        closeButton.onclick = () => dismiss(toast.id)

        toastElement.appendChild(closeButton)
        container.appendChild(toastElement)

        // 애니메이션
        setTimeout(() => {
          toastElement.style.opacity = "1"
          toastElement.style.transform = "translateY(0)"
        }, 10)
      })
    }
  }, [toasts, dismiss])

  return { toast, dismiss }
}
