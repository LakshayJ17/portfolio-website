import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Getting Started with Tailwind CSS - Lakshay Jain",
  description: "Learn Tailwind CSS fundamentals and best practices",
};

export default function TailwindBasicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="px-4 md:px-10 pt-20 pb-10 min-h-screen prose">
      {children}
    </Container>
  );
}
