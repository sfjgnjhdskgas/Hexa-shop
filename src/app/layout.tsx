import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/componants/Navbar/Navbar";
import Footer from "@/componants/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Cart from "./Cart/Cart";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Hexashop - Home",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className="container">
            <Cart />
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
