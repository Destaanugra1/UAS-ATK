import type { Metadata } from "next";
import "./globals.css";
import "./Home.css";


export const metadata: Metadata = {
  title: "Alat Tulis",
  description: "Menjual Peralatan Tulis dan Kantor",
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
