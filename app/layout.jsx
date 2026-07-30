import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AR Graphics",
  description: "Printing & Digital Services",

verification: {
  google: "38Z4eyN7wuzuGiXv2jG7RxS7_TfQK2Ex4rHDuW-StKo",
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
