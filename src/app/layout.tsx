import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Bryan Macaraig.",
  description: "A Portfolio to display my skills, my courses, and my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
