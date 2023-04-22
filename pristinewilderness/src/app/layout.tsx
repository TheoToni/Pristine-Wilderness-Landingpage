import "./globals.css";

//TODO CHANGE THE FONT HERE
import { Cabin } from "next/font/google";

const inter = Cabin({ subsets: ["latin"] });
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
