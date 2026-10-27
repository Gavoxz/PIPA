"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
export default function Header({ contactHref }: { contactHref: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("scroll", f); window.removeEventListener("keydown", k); };
  }, []);
  return (
    <header className={`hdr ${scrolled || open ? "on" : ""}`}>
      <div className="wrap">
        <a href="#top" className="logo" aria-label="PIPA, início">pipa</a>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="nav" className={`nav ${open ? "open" : ""}`} aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a className="btn btn-p" href={contactHref} target="_blank" rel="noopener noreferrer">Falar com a PIPA</a>
        </nav>
      </div>
    </header>
  );
}
