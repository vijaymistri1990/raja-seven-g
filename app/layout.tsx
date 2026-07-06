import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raja7s.com'),
  title: "Raja7 Game Download | Play Raja7 & Win Real Cash 2026",
  description: "Download the official Raja7 Game APK for Android and start earning real cash today! Join Raja7 Play, claim your massive Raja7 bonus, and win real money daily with the top-rated Raja7 app.",
  keywords: [
    "Raja7", "Raja7 APK download", "Raja7 game download", "Raja7 real cash", 
    "play Raja7 earn money", "Raja7 app", "Raja7 2026", "Raja7 login", 
    "Raja7 bonus code", "Raja7 real money game", "download Raja7 APK", "Raja 7",
    "Raja7 official website", "Raja7 win cash", "play Raja7 and earn real cash",
    "win money online Raja7", "real cash games in India 2026", "best earning app Raja7",
    "top real money games", "Raja7 VIP", "Raja7 sign up bonus", "Raja7 withdraw",
    "Raja7 referral code", "Raja7 customer care", "Raja7 online game"
  ],
  icons: {
    icon: '/raja71.png',
    shortcut: '/raja71.png',
    apple: '/raja71.png',
  },
  openGraph: {
    title: "Raja7 Game Download | Play Raja7 & Win Real Cash",
    description: "Download the official Raja7 Game APK for Android and start earning real cash today! Join Raja7 Play, claim your massive Raja7 bonus, and win real money daily.",
    url: "https://raja7s.com",
    siteName: "Raja7 Game",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raja7 Game Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja7 Game Download | Win Real Cash",
    description: "Download the official Raja7 Game APK for Android and start earning real cash today! Get the highest Raja7 bonus.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://raja7play.net/#organization",
        "name": "Raja7 Game",
        "url": "https://raja7play.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://raja7play.net/raja7.png"
        },
        "description": "Raja7 is the premium gaming destination for Android users."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Raja7 Game",
        "operatingSystem": "ANDROID",
        "applicationCategory": "GameApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "24500"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
