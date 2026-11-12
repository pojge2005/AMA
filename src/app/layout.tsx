import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academy of Martial Arts | Nagpur",
  description:
    "Academy of Martial Arts, Nagpur — karate, self-defence, instructors, events and academy updates.",
  applicationName: "Academy of Martial Arts"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
