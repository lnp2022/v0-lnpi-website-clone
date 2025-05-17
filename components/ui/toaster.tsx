"use client"

import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toast } = useToast()

  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}
