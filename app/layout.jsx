import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.arrohillagraphics.com"),

  title: {
    default: "AR Graphics | Printing & Digital Services in Bahadurgarh",
    template: "%s | AR Graphics",
  },

  description:
    "AR Graphics provides Printing, Flex Printing, Visiting Cards, Online Forms, Passport Photos, Lamination, PAN Card, Aadhaar Services, Bill Payments, Money Transfer and Digital Services in Bahadurgarh, Haryana.",

  keywords:
    "AR Graphics, Printing Shop Bahadurgarh, Digital Printing, Flex Printing, Visiting Cards, Passport Photo, Online Forms, PAN Card, Aadhaar Services, Money Transfer, Bill Payment, Lamination, Color Print, Black and White Print, CSC Center, Graphics Design, Bahadurgarh, Jhajjar, Haryana",

  alternates: {
    canonical: "https://www.arrohillagraphics.com",
  },

  openGraph: {
    title: "AR Graphics | Printing & Digital Services",
    description:
      "Printing, Flex Printing, Visiting Cards, Online Forms, Passport Photos, PAN Card, Aadhaar Services and Digital Services in Bahadurgarh.",
    url: "https://www.arrohillagraphics.com",
    siteName: "AR Graphics",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AR Graphics | Printing & Digital Services",
    description:
      "Printing, Flex Printing, Visiting Cards, Online Forms, Passport Photos and Digital Services in Bahadurgarh.",
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

  verification: {
    google: "38Z4eyN7wuzuGiXv2jG7RxS7_TfQK2Ex4rHDuW-StKo",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.arrohillagraphics.com/#business",
    name: "AR Graphics",
    url: "https://www.arrohillagraphics.com",
    telephone: "+91-8053440252",
    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite Flipkart Minutes, Jhajjar Road",
      addressLocality: "Bahadurgarh",
      addressRegion: "Haryana",
      postalCode: "124507",
      addressCountry: "IN",
    },

    areaServed: [
      "Bahadurgarh",
      "Jhajjar",
      "Delhi NCR",
    ],

    openingHours: "Mo-Su 09:00-20:00",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8053440252",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
