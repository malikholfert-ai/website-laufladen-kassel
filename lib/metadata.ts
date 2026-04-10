import type { Metadata } from "next";

const BASE_URL = "https://www.laufladen.de";
const SITE_NAME = "Laufladen Kassel";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Laufladen Kassel — Laufschuhberatung & Laufanalyse seit 1984",
    template: "%s | Laufladen Kassel",
  },
  description:
    "Dein Laufspezialisten am Friedrichsplatz Kassel. Individuelle Laufanalyse auf der Straße, 30+ Jahre Erfahrung. Adidas, Asics, Brooks, ON Running, Saucony und mehr.",
  keywords: [
    "Laufladen Kassel",
    "Laufschuhe Kassel",
    "Laufanalyse Kassel",
    "Laufschuhberatung",
    "Friedrichsplatz Kassel",
    "Laufsportfachgeschäft",
    "Brooks Kassel",
    "ON Running Kassel",
    "Nordic Walking Kassel",
  ],
  authors: [{ name: "Laufladen Kassel" }],
  creator: "Laufladen Kassel",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Laufladen Kassel — Laufschuhberatung seit 1984",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

/** Hilfsfunktion für seitenspezifische Metadata */
export function createPageMetadata(
  title: string,
  description: string,
  path: string = "/"
): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: url,
    },
  };
}

/** JSON-LD LocalBusiness Schema */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Laufladen Kassel",
  description:
    "Spezialisiertes Laufsportfachgeschäft am Friedrichsplatz Kassel mit individueller Laufanalyse auf der Straße. Seit 1984.",
  url: BASE_URL,
  telephone: "+49-561-104475",
  email: "kassel@laufladen.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedrichsplatz 12",
    addressLocality: "Kassel",
    postalCode: "34117",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3127,
    longitude: 9.4797,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, EC Card",
  sameAs: ["https://www.instagram.com/laufladen_kassel"],
};
