import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phoenix UOS | 빈집 생태·에너지 플랫폼",
  description: "빈집을 생태, 에너지, AI와 연결하는 Phoenix UOS 플랫폼",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
