import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-context";

export const metadata: Metadata = {
  title: "Shadcn Gradient Forge",
  description:
    "A production-ready gradient theming system for shadcn components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark theme-nitro-midnight-blurple"
      data-theme="theme-nitro-midnight-blurple"
      data-color-mode="dark"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
