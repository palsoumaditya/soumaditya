import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarWrapper from "@/components/ui/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soumaditya Pal - Full Stack Developer & Software Engineer",
    template: "%s | Soumaditya Pal"
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Computer Science student passionate about building scalable applications and innovative solutions.",
  keywords: [
    "Soumaditya Pal",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Computer Science",
    "NSHM Durgapur",
    "Legal Care",
    "Web3",
    "AI",
    "DevOps"
  ],
  authors: [{ name: "Soumaditya Pal" }],
  creator: "Soumaditya Pal",
  publisher: "Soumaditya Pal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://soumadityapal.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://soumadityapal.in',
    title: 'Soumaditya Pal - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Computer Science student passionate about building scalable applications.',
    siteName: 'Soumaditya Pal Portfolio',
    images: [
      {
        url: '/me/soumaditya.jpg',
        width: 1200,
        height: 630,
        alt: 'Soumaditya Pal - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumaditya Pal - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Computer Science student passionate about building scalable applications.',
    images: ['/me/soumaditya.jpg'],
    creator: '@soumaditya_pal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Soumaditya Pal",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Computer Science student passionate about building scalable applications and innovative solutions.",
              "url": "https://soumadityapal.in",
              "image": "https://soumadityapal.in/me/soumaditya.jpg",
              "sameAs": [
                "https://github.com/soumaditya-pal",
                "https://linkedin.com/in/soumaditya-pal",
                "https://twitter.com/soumaditya_pal"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "NSHM Knowledge Campus, Durgapur"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Legal Care"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Full Stack Development",
                "Web Development",
                "Software Engineering"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Durgapur",
                "addressRegion": "West Bengal",
                "addressCountry": "India"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Soumaditya Pal Portfolio",
              "url": "https://soumadityapal.in",
              "description": "Portfolio website of Soumaditya Pal, a Full Stack Developer and Computer Science student showcasing projects, skills, and experience.",
              "author": {
                "@type": "Person",
                "name": "Soumaditya Pal"
              },
              "potentialAction": {
                "@type": "SearchAction",
              "target": "https://soumadityapal.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="soumaditya-theme">
          <NavbarWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
