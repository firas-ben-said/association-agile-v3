import styles from "@/components/dashboard/dashboard.module.css";
import Footer from "@/components/dashboard/footer/footer";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Inter } from "next/font/google";
import "./user.css";

const inter = Inter({ subsets: ["latin"] });


export default function UserLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
