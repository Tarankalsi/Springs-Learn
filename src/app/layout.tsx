"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster as HotToaster } from "react-hot-toast";
import Script from "next/script";
import { useParams, usePathname } from "next/navigation";
import { Course } from "@/types";
import { homeData } from "@/constants";
import { useEffect, useState } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState<string>(
    "Springlearns - Training Courses For Professionals"
  );
  const [description, setDescription] = useState<string>(
    "At Spring Learns, we are committed to delivering high-quality, industry-leading educational programs that empower professionals and businesses to succeed."
  );
  const [canonical, setCanonical] = useState<string>(
    "https://www.springlearns.com/"
  );
  const [keywords, setKeywords] = useState<string>("");
  const pathname = usePathname(); // Reactive pathname hook
  const params = useParams(); // Retrieve route parameters


  useEffect(() => {
    if (!pathname) return; // Ensure pathname is not null
  
    const currentUrl = window.location.href;
    setCanonical(currentUrl);
  
    if (pathname.includes("course-detail")) {
      const id = params?.id as string;
      const courseData: Course | undefined = homeData?.courses?.find(
        (ele) => ele?.id === Number(id)
      );
      if (courseData) {
        setTitle(courseData.metaTitle || title);
        setDescription(courseData.metaDescription || description);
        setKeywords(courseData.metaKeywords || "");
      }
    } else if (pathname.includes("about")) {
      setTitle("About - Springlearns");
    } else if (pathname.includes("contact-us")) {
      setTitle("Contact Us - Springlearns");
    } else if (pathname.includes("courses")) {
      setTitle("Courses - Springlearns");
    }
  }, [pathname, params]); // Re-run when the route changes
  

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/springlearns-logo.ico" />
        <link rel="canonical" href={canonical} />
        <meta
          name="google-site-verification"
          content="BKyZT_79RKxCjtjPKzAqM24rkhyIR4DyDqbLFRSAYsY"
        />
      </head>

      <Script
        id="google-analytics-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-P32660LFD8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P32660LFD8');
        `}
      </Script>

      <body
        className={cn(
          "min-h-screen overflow-x-hidden w-fit-content bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <HotToaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
