import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo-text">AR Rohilla Graphics</h2>

      <ul className="nav-links">
        <li><Link href="/">HOME</Link></li>
        <li><a href="#services">SERVICES</a></li>
        <li><Link href="/location">LOCATION</Link></li>
        <li><Link href="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
}