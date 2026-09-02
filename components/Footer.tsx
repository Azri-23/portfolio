export default function Footer() {
  return (
    <footer className="px-6 py-10 max-w-3xl mx-auto border-t border-[#E5E7EB] mt-20">
      <p className="text-sm text-[#5B6672]">
        © {new Date().getFullYear()} Azri. All rights reserved.
      </p>
    </footer>
  );
}