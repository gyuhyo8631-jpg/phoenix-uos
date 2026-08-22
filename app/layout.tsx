/** Living Infrastructure: concise metadata and a Korean-language document root for Phoenix UOS. */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phoenix UOS — Vacant House Ecology & Energy",
  description: "빈집을 친환경 주거·분산형 에너지·생태 회복·AI 운영 데이터가 결합된 지역 자산으로 전환하는 Phoenix UOS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
