import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root layout passes through so [locale]/layout can own <html> / <body>
 * with correct server-rendered lang and dir.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
