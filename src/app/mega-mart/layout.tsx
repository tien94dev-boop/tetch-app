import React from "react"
import Header from "@/components/mega-mart/Layout/Header"
import Navbar from "@/components/mega-mart/Layout/NavBar"
import { Covered_By_Your_Grace, Geist, Geist_Mono, Inter, Oswald } from "next/font/google";
const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    variable: "--font-inter",
    display: 'swap',
  });
export default function Layout({
    children,
 }: Readonly<{
    children:React.ReactNode
 }>) {
    return (
        <div className="antialiased max-w-[1440px] mx-auto font-inter">
            <Header/>
            <Navbar/>
            {children}
        </div>
    )

}