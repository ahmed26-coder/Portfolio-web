import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AosInit from "./Components/aos-init";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Ahmed's Portfolio",
  description:
    "A portfolio website showcasing my skills, projects, and experience in front-end development.",
  keywords: [
    "Ahmed",
    "Portfolio",
    "ahmadadham",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer"
  ],
  authors: [{ name: "Ahmed" }],
  creator: "Ahmed",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    url: "https://portfolio-ahmad-adham.vercel.app/",
    siteName: "Ahmed's Portfolio",
    images: [
      {
        url: "/Screenshot 2025-04-12 194828.webp",
        width: 1200,
        height: 630,
        alt: "Ahmed Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/logome6-removebg-preview.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AosInit />
          <div className="lg:flex">
            <Nav />
            {children}
            <Toaster richColors position="top-center" />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
