"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light"  enableSystem>
      {children}
    </ThemeProvider>
  );
}
