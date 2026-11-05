import { Manrope, Noto_Sans_Thai, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./portfolio.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const thai = Noto_Sans_Thai({ variable: "--font-thai", subsets: ["thai"] });

export const metadata = {
  title: "ชนะวงศ์ ศิริมงคล — IT Support & Network System",
  description:
    "โปรไฟล์ของ ชนะวงศ์ ศิริมงคล — IT Support & Network System ดูแลคอมพิวเตอร์ ระบบเครือข่าย LAN/Wi-Fi, Switch Layer 2/3, NAS Backup, Zabbix และ CCTV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" suppressHydrationWarning className={`${manrope.variable} ${grotesk.variable} ${thai.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
