import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Herbal Weight Management Support in Pakistan`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Dr Rubina",
    "Dr Rubina Official",
    "herbal weight loss Pakistan",
    "weight management",
    "healthy lifestyle",
    "Pakistani diet plan",
    "BMI calculator",
    "calorie calculator",
    "weight loss tips",
    "healthy eating",
    "fitness Pakistan",
    "natural wellness",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Herbal Weight Management Support in Pakistan`,
    description: site.description,
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} healthy lifestyle support`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Herbal Weight Management Support`,
    description: site.description,
    images: [site.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f7a45",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${dmSans.variable} ${fraunces.variable} bg-background`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-1554402367237634" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            description: site.description,
            email: site.email,
            telephone: site.phone,
            logo: `${site.url}/apple-icon.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: site.city,
              addressCountry: site.country,
            },
            sameAs: [site.instagram, site.tiktok],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: site.phone,
              areaServed: "PK",
              availableLanguage: ["en", "ur"],
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            description: site.description,
            inLanguage: "en-PK",
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1554402367237634"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <WhatsappFab />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZVQS8MYYYJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVQS8MYYYJ');
          `}
        </Script>
      </body>
    </html>
  );
}
