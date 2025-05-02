import type React from "react"

export default function AccessoriesLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return <div>{children}</div>
}
