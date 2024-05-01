import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex `}>
        <ThemeProvider attribute="class">
          <SidebarProvider>
            <Sidebar />

            <div className="flex flex-col lg:w-[calc(100%-18rem)] bg-[#f0f4f9] w-screen dark:bg-[#1b222d]">
              <Navbar />
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
