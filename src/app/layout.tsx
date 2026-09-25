import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luthfi Lidya Ningrum — Portfolio 2026",
  description: "Portfolio Luthfi Lidya Ningrum. A collection of selected work and ideas.",
  openGraph: {
    title: "Luthfi Lidya Ningrum — Portfolio 2026",
    description: "A collection of selected work and ideas.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
