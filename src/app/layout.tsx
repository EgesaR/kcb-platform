import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sevillanaRegular = localFont({
  src: "./fonts/Sevillana-Regular.ttf",
  variable: "--font-sevillana-regular",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "KCB Platform",
  description: "A platform for the proud buticians",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sevillanaRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
