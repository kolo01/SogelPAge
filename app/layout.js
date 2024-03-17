import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sogel landing page",
  description: "A beautiful page build to present our services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ChakraProvider>        {children}
        </ChakraProvider>

        </body>
    </html>
  );
}
