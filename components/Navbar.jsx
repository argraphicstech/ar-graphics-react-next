import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo-text">AR Graphics</h2>

      <ul className="nav-links">
        <li><Link href="/">HOME PAGE</Link></li>
        <li><Link href="/about">ABOUT US</Link></li>
        <li><Link href="/location">LOCATION</Link></li>
        <li><Link href="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
}
