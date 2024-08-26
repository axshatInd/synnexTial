import { Outfit } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./(routes)/dashboard/_components/Header";

// Font configurations
const outfit = Outfit({ subsets: ["latin"] });
const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "synnexTial",
  description: "CollabFreely",
};

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
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} flex flex-col min-h-screen`}>
          <Header /> {/* Header at the top */}
          <main className="flex-grow pt-20">
            {" "}
            {/* Ensure main content grows */}
            {children}
          </main>
          <Footer /> {/* Footer at the bottom */}
        </body>
      </html>
    </ClerkProvider>
  );
}
