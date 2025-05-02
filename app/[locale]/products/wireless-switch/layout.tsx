import type React from "react"

export default function WirelessSwitchLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return <div>{children}</div>
}
