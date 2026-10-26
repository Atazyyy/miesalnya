import { Flame } from "lucide-react";

const ITEMS = [
  "LEVEL 5 HANYA UNTUK PEMBERANI",
  "CUSTOM LEVEL SESUKA HATIMU",
  "DIMSUM HARUS COBA",
  "ES SUSU COKELAT PENAWAR PEDAS",
  "TERMASUK PULANG JAM 10 MALAM",
  "YANG NANGIS BERARTI MENANG",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y-4 border-char bg-chili py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
              {item}
            </span>
            <Flame className="h-4 w-4 fill-heat text-heat" />
          </span>
        ))}
      </div>
    </div>
  );
}
