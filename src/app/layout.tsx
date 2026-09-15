import type { Metadata } from "next";
import { MusicPlayerProvider } from "@/components/travel/MusicPlayer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Universe",
  description: "A personal travel-memory atlas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body><MusicPlayerProvider>{children}</MusicPlayerProvider></body>
    </html>
  );
}
