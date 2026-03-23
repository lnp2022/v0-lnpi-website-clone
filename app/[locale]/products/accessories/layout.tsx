import type React from "react"

export default async function AccessoriesLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <div>{children}</div>
}