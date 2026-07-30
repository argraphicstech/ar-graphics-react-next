import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AR Graphics",
  description: "Printing & Digital Services",

  verification: {
    google: "bD-KB4u7-K-JLOzQJX5piUu7ZjX1ty9ZDvTPNSYfJ5U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
