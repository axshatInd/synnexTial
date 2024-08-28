"use client";
import { Outfit } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./(routes)/dashboard/_components/Header";
import useTheme from "./_components/useTheme";

// Font configurations
const outfit = Outfit({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="text-center py-4">
      <a
        href="https://www.instagram.com/akshat.7_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
      >
        &copy; axshatInd
      </a>
    </footer>
  );
}

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} ${theme} flex flex-col min-h-screen`}
        >
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
