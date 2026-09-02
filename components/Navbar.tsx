import Link from "next/link";
import { navLinks } from "@/types";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto">
      <span
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-lg font-semibold text-[#16202A]"
      >
        Azri
      </span>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[#5B6672] hover:text-[#2E5EAA] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}