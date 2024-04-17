import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "../global.css";

export const metadata: Metadata = {
  title: "Forex Session Clocks",
  description:
    "This is an Open-Source Project focused to show the Major Trading Session",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children} </body>
      <GoogleAnalytics gaId="G-15YME0FWS7" />
    </html>
  );
}
