import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Gunakarthik Naidu Lanka | Software Engineer",
    template: "%s | Gunakarthik Naidu Lanka",
  },
  description:
    "Software Engineer portfolio focused on backend services, web applications, APIs, AWS, and data systems fundamentals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
