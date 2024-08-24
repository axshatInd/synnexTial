import { Outfit } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./(routes)/dashboard/_components/Header";

// Font configurations
const outfit = Outfit({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "synnex",
  description: "CollabFreely",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Header /> {/* Add Header here */}
          <main className="pt-20">
            {" "}
            {/* Adjust padding top for header height */}
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
