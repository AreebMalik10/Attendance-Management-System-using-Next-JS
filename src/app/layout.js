'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CssBaseline, Toolbar } from "@mui/material";
import { usePathname } from "next/navigation";
import Sidebar from "@/Components/Sidebar";
import Header from "./header/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Sidebar",
//   description: "A sidebar component with navigation links",
// };



export default function RootLayout({ children }) {

  const pathname = usePathname();
  const hideSidebar = pathname === "/login"

  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CssBaseline />
        {/* {!hideSidebar &&  <Header />} */}
        <div style={{ display: "flex"}}>
          {!hideSidebar && <Sidebar /> }
          <main style={{width: "100%"}}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
