import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-bone/10 bg-char/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#" className="font-display text-2xl font-extrabold text-cream">
          MIE<span className="text-chili">SALNYA</span>
        </a>
        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 rounded-full bg-chili px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          <ShoppingBag className="h-4 w-4" />
          Pesanan
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-heat text-xs font-extrabold text-char">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
