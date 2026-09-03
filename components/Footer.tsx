export default function Footer() {
  return (
    <footer className="px-6 py-10 max-w-3xl mx-auto border-t border-[var(--color-border)] mt-20">
      <p className="text-sm text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Azri. All rights reserved.
      </p>
    </footer>
  );
}