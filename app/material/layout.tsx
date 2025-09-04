import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnrealGenPlugin",
  description:
    "AI-powered chat assistant for generating Unreal Engine assets from text prompts.",
};

export default function MaterialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
