import { Github, Instagram, MapPin, Clock, QrCode } from "lucide-react";
import { WA_NUMBER } from "../data/menu";

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo MieSalnya! Saya mau tanya-tanya dulu boleh?"
)}`;

export default function Footer() {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(
    window.location.href
  )}`;

  return (
    <footer className="border-t border-bone/10 bg-[#120d0a]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-extrabold text-cream">
              MIE<span className="text-chili">SALNYA</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/55">
              Mie level pedas buat yang berani. Datang, scan, pesan, nangis
              sedikit, pulang bahagia.
            </p>
            <div className="mt-5 space-y-2 text-sm text-bone/60">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-chili" /> Jl. Riau No. 21,
                Bandung
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-chili" /> Setiap hari 10.00 –
                22.00
              </p>
              <p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 hover:text-bone"
                >
                  <Instagram className="h-4 w-4 text-chili" /> @miesalnyy
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-heat">
              Cabang Lain
            </p>
            <ul className="mt-4 space-y-2 text-sm text-bone/55">
              <li>MieSalnya Cihampelas</li>
              <li>MieSalnya Dipatiukur</li>
              <li>MieSalnya Buah Batu <span className="text-bone/30">(segera)</span></li>
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-heat">
              <QrCode className="h-4 w-4" /> Menu di mejamu
            </p>
            <div className="mt-4 inline-flex flex-col items-center rounded-2xl bg-cream p-3">
              <img
                src={qrSrc}
                alt="QR menu MieSalnya"
                width={140}
                height={140}
                className="rounded-lg"
                loading="lazy"
              />
              <p className="mt-2 text-center text-[11px] font-bold text-char/70">
                Scan untuk buka menu ini
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-bone/35 sm:flex-row sm:items-center">
          <p>© 2026 MieSalnya. Seluruh merek dan konten bersifat fiktif.</p>
          <p className="flex items-center gap-1.5">
            Concept demo — dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-bone/60 hover:text-bone"
            >
              <Github className="h-3.5 w-3.5" /> Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
