import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oumie - Track Smarter, Study Better",
  description:
    "Oumie automatically tracks your study sessions, reveals your learning patterns, and helps you avoid burnout. Free for students.",
  keywords: [
    "study tracker",
    "student productivity",
    "time tracking",
    "college",
    "university",
    "study habits",
  ],
  openGraph: {
    title: "Oumie - Track Smarter, Study Better",
    description:
      "Oumie automatically tracks your study sessions, reveals your learning patterns, and helps you avoid burnout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
