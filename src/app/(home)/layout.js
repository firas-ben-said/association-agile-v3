import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/navbar/Navbar";
// import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Association Management App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">

      <body>

      <Navbar/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      </body>
      </html>
  );
}

