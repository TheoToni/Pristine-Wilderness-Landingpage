import "./globals.css";

//TODO CHANGE THE FONT HERE
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
////////////////////////////////////////////
export const metadata = {
  title: "The Pristine Wilderness",
  description: "A landingpage about Nature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
