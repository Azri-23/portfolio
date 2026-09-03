import Link from "next/link";
import { navLinks } from "@/types";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-3xl mx-auto">
      <span
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-lg font-semibold text-[var(--color-text)]"
      >
        Azri
      </span>
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
