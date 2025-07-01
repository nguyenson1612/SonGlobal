import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: {
    default: "Songlobal - Learn Languages",
    template: "%s | Songlobal",
  },
  description: "Learn, practice and master new languages with Songlobal",
  keywords: [
    "language learning",
    "education",
    "postgresql",
    "sonner",
    "drizzle",
    "zustand",
    "mysql",
    "lucide-react",
    "next-themes",
    "clerk-themes",
    "clerk",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "languages",
    "learn",
  ],
  authors: [
    {
      name: "Nguyen Minh Son",
    },
  ],
  creator: "Son",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/nguyenson1612/SonGlobal",
    title: "Songlobal - Learn Languages",
    description: "Learn, practice and master new languages with Songlobal",
    siteName: "Lingo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingo - Learn Languages",
    description: "Learn, practice and master new languages with Songlobal",
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};
