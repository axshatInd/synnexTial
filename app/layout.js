"use client";
import { Outfit } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./(routes)/dashboard/_components/Header";
import ThemeSwitcher from "./_components/ThemeSwitcher"; // Import ThemeSwitcher
import useTheme from "./_components/useTheme";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

// Font configurations
const outfit = Outfit({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="text-center py-4 bg-transparent fixed bottom-0 left-0 w-full z-40">
      <a
        href="https://www.instagram.com/akshat.7_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
      >
        &copy; SynnexTial
      </a>
    </footer>
  );
}

export default function RootLayout({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>SynnexTial</title>
          <meta
            name="description"
            content="SynnexTial: Your workspace for innovative solutions and creative ideas."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="SynnexTial, workspace, innovative solutions, creative ideas"
          />
          <meta name="author" content="SynnexTial" />
          <meta property="og:title" content="SynnexTial" />
          <meta
            property="og:description"
            content="SynnexTial: Your workspace for innovative solutions and creative ideas."
          />
          <meta property="og:url" content="https://synnextial.vercel.app" />
          <meta property="og:site_name" content="SynnexTial" />
          <meta property="og:type" content="website" />
        </Head>
        <body
          className={`${outfit.className} ${theme} flex flex-col min-h-screen`}
        >
          <Header />
          <main className="flex-grow pt-20 z-10 relative">
            <Toaster />
            {children}
          </main>
          <Footer />
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeSwitcher
              isDark={theme === "dark"}
              onChange={toggleTheme}
              className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
