import { Metadata } from "next";
import { siteConfig } from "./site";

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("en-US", { month: "2-digit" }); // Full month name
  const year = newDate.getFullYear();

  return { month, year };
};

export function constructMetadata({
  title = "Happy Smiles | Dental Clinic",
  description = "We provide advanced, painless dental treatments with a personalized approach—so you can smile with confidence every day.",
  image = siteConfig.ogImage,
  icons = "/FAV.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Dental Clinic",
      "Dentist in Karnal",
      "Happy Smiles Dental Clinic",
      "Painless Dentistry",
      "Dental Implants",
      "Teeth Whitening",
    ],
    authors: [
      {
        name: "Happy Smiles Dental Clinic",
      },
    ],
    creator: "Happy Smiles Dental Clinic",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@dentalsmilesdc",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
