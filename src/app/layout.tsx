import { Header } from "@/components/header"

import "./globals.css"
import { Poppins } from "next/font/google"
import { FilterContextProvider } from "@/contexts/filterContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Dish Hub",
  description: "Dish Hub is a portal of recipes made with Next JS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
