import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const GTM_ID = "GTM-5TLVS4CN";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://zarysconsultoria.com.br";
const title = "Zarys Consultoria | Estruturando seu crescimento";
const description =
  "Zarys é uma holding e consultoria de tecnologia de excelência, com foco em HealthTech, IA nativa e segurança rigorosa de dados. Lançamento em 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Zarys Consultoria",
  authors: [{ name: "Zarys" }],
  keywords: [
    "Zarys",
    "Zarys Consultoria",
    "consultoria de tecnologia",
    "consultoria em TI",
    "HealthTech",
    "SaaS",
    "inteligência artificial",
    "transformação digital",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Zarys Consultoria",
    title,
    description:
      "Consultoria e soluções de altíssimo nível em tecnologia e saúde. Lançamento em 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zarys Consultoria",
  alternateName: "Zarys",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image.png`,
  description,
  slogan: "Estruturando seu crescimento",
  sameAs: [
    "https://www.instagram.com/zarys.consultoria/",
    "https://www.linkedin.com/company/zarys-consultoria/",
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
