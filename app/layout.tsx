import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Javanese } from "next/font/google";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import { Providers } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });
// const noto = Noto_Sans_Javanese({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tweet Post  Maker",
  description: "Tweet like post making for linkedin and instagram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="">
            <div className="">
              <Navbar />
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
