import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Stop Pignoramento Casa Roma - Ferma il pignoramento della tua abitazione nella Capitale",
  description:
    "Soluzioni concrete per salvare la tua casa a Roma da pignoramenti e procedure esecutive. Consulenza gratuita e personalizzata con esperti del Tribunale di Roma.",
  keywords:
    "pignoramento casa Roma, fermare asta immobiliare Roma, bloccare esecuzione immobiliare Roma, salvare casa dal pignoramento Roma, consulenza pignoramento immobiliare Roma, opposizione esecuzione immobiliare Roma, sospensione asta Roma, debito immobiliare Roma",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
