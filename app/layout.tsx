import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileNav } from "@/components/ui/MobileNav";
import { MotionProvider } from "@/components/providers/motion-provider";

// Display font — sharp, technical feel
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Mono font for numbers, labels
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luminary — Student Dashboard",
  description: "Your personal futuristic learning command center.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#050508",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-body bg-bg-base text-text-primary`}
      >
        {/* Background grid noise */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='1' height='40' x='20' fill='%23fff'/%3E%3Crect width='40' height='1' y='20' fill='%23fff'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Ambient glow top */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex h-screen overflow-hidden">
          <MotionProvider>
            <Sidebar />
          </MotionProvider>
          <main className="flex-1 overflow-y-auto">
            <div className="min-h-full pb-24 lg:pb-8">{children}</div>
          </main>
        </div>

        <MotionProvider>
          <MobileNav />
        </MotionProvider>
      </body>
    </html>
  );
}
