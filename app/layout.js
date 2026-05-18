import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Mohammed Abdul Omer | AI & ML Engineer",
  description:
    "Portfolio of Mohammed Abdul Omer — AI Engineer specialising in LLM fine-tuning, multi-agent systems, RAG pipelines, and MLOps. 10 production projects, 8 live deployments.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LLM Fine-tuning",
    "RAG",
    "MLOps",
    "LangGraph",
    "CrewAI",
    "Generative AI",
    "Mohammed Abdul Omer",
    "Hyderabad",
  ],
  authors: [{ name: "Mohammed Abdul Omer", url: "https://github.com/MOHD-OMER" }],
  creator: "Mohammed Abdul Omer",

  // Open Graph — controls how the link looks when shared on LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Mohammed Abdul Omer | AI & ML Engineer",
    description:
      "AI Engineer building production-grade LLMs, RAG systems, multi-agent pipelines, and MLOps workflows — end-to-end and deployed.",
    url: "https://mohdomer.vercel.app",
    siteName: "Mohammed Abdul Omer Portfolio",
    locale: "en_US",
    type: "website",
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abdul Omer | AI & ML Engineer",
    description:
      "AI Engineer building production-grade LLMs, RAG systems, multi-agent pipelines, and MLOps workflows.",
    creator: "@mohdomer",
  },

  // Theme color — matches the blue accent used throughout the site
  themeColor: "#3b82f6",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-dark text-text font-sans antialiased">
        {/* Fixed Navbar */}
        <NavBar />

        {/* Page Content */}
        {/* pt-16 mobile / pt-24 desktop — hero never clipped by navbar */}
        <main className="pt-16 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
