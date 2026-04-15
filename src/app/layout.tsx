import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Betel Shibeshi | Data Analyst Portfolio",
  description:
    "Aspiring Data Analyst with hands-on experience in data cleaning, visualization, and business intelligence. Proficient in Python, SQL, and Excel.",
  keywords: [
    "data analyst",
    "portfolio",
    "python",
    "sql",
    "excel",
    "machine learning",
    "data visualization",
    "business intelligence",
  ],
  openGraph: {
    title: "Betel Shibeshi | Data Analyst",
    description: "Transforming data into strategic insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
