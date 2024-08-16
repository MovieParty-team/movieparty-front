import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "../utils/QueryProvider";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/constants/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movieparty",
  description: "Plus jamais seul au cinéma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={antdTheme}>
          <QueryProvider>{children}</QueryProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
