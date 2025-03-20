import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Hi, I&#39;m a Front-End Developer with a deep passion for building modern and intuitive web applications. My expertise lies in React, Next.js, JavaScript, and Tailwind CSS, enabling me to create high-performance, responsive, and visually stunning digital experiences.",
  icons:{
    icon:"/logo.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          <div className=" sm:flex gap-20">
            <Nav />
            {children}
            </div>
          <Footer />
        </ThemeProvider>
      </body>   
    </html>
  );
}
