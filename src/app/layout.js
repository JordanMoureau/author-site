import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import MobileNav from "./components/mobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Author J. Moureau",
  description: "Debut Author of Aster of Warhaven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tgd0yid.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="background-overlay"> </div>
        {children}
      </body>
    </html>
  );
}
