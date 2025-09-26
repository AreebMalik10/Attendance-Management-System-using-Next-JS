'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CssBaseline, Toolbar } from "@mui/material";
import { usePathname } from "next/navigation";
import Sidebar from "@/Components/Sidebar";

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
        <div style={{ display: "flex"}}>
        {/* <div> */}
          {!hideSidebar && <Sidebar /> }
          <main style={{ flexGrow:1, paddingLeft: "20px" ,width: "100%"}}>
          {/* <main> */}
          {!hideSidebar && <Toolbar /> }
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
