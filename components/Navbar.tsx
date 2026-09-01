import Link from "next/link";
import { navLinks } from "@/types";

export default function Navbar() {
    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}