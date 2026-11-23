import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "@/components/navbar/footer";
import { Toaster } from "sonner";
import { site } from "@/constants/site";

// Inter is a variable font: leaving out `weight` ships one file that covers every weight.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s - ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/avatar-portfolio.png", width: 256, height: 256, alt: site.name }],
  },
  twitter: { card: "summary", creator: "@Lakshcode" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} relative bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-700`}
        >
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
