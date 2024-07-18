import type { Metadata } from "next";
import "./globals.scss";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export const metadata: Metadata = {
  title: "bet",
  description: "bet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-black">{children}</body>
    </html>
  );
}
