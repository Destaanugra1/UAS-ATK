import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Toko ATK Serba Ada",
  description: "Menjual berbagai Peralatan Kantor dan sekolah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <div className="">
            {/* <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
          </div>
          {children}
        </body>
      </html>
  );
}
