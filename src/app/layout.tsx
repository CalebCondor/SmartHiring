import type { Metadata, Viewport } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const SITE_URL = "https://onlinehealth.us";
const SITE_NAME = "OnliHealth";
const LEGAL_NAME = "Online Health";
const DEFAULT_DESCRIPTION =
  "OnliHealth — Casi 10 años desarrollando software especializado para la industria de la salud en Puerto Rico. Telemedicina, gestión de casos clínicos, cumplimiento HIPAA y plataformas para hospitales, aseguradoras y gobierno.";
const DEFAULT_KEYWORDS = [
  "OnliHealth",
  "Online Health",
  "onlinehealth.us",
  "software salud Puerto Rico",
  "telemedicina",
  "gestión de casos clínicos",
  "certificaciones médicas",
  "denial management hospitales",
  "salud digital",
  "HIPAA",
  "case management Puerto Rico",
  "Smart Hiring IRL",
];

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2540" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Software para la Industria de la Salud en Puerto Rico`,
    template: `%s · ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  category: "Software para la Salud",
  classification: "Health Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-PR": "/",
      "es": "/",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Software para la Industria de la Salud en Puerto Rico`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Software para la industria de la salud`,
        type: "image/png",
      },
    ],
    countryName: "Puerto Rico",
    emails: ["contacto@onlinehealth.us"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onlinehealth",
    creator: "@onlinehealth",
    title: `${SITE_NAME} | Software para la Industria de la Salud en Puerto Rico`,
    description: DEFAULT_DESCRIPTION,
    images: {
      url: "/og-image.png",
      alt: `${SITE_NAME} — Software para la industria de la salud`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0a2540",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: ["yandex-verification-code"],
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
  other: {
    "geo.region": "PR",
    "geo.placename": "Puerto Rico",
    "geo.position": "18.2208;-66.5901",
    ICBM: "18.2208, -66.5901",
    "theme-color": "#0a2540",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2017",
    areaServed: { "@type": "Country", name: "Puerto Rico" },
    knowsAbout: [
      "Health Technology",
      "Telemedicine",
      "Case Management",
      "HIPAA Compliance",
      "Government Services",
      "AI Support",
      "Customer Operations",
      "SaaS",
      "Automation",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    subOrganization: {
      "@type": "Organization",
      name: "Smart Hiring IRL",
      url: `${SITE_URL}#smarthiring`,
    },
    sameAs: [
      "https://www.linkedin.com/company/onlinehealth",
      "https://twitter.com/onlinehealth",
      "https://www.facebook.com/onlinehealth",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: ["PR", "US"],
      availableLanguage: ["Spanish", "English"],
      email: "contacto@onlinehealth.us",
    },
  };

  return (
    <html lang="es-PR" className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="author" content={LEGAL_NAME} />
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${LEGAL_NAME}`} />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-poppins min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}