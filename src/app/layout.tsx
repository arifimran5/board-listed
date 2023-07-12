import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { cn } from "@/utils/helper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Board.",
  description: "Board by listed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("inter.className")}>{children}</body>
    </html>
  );
}
