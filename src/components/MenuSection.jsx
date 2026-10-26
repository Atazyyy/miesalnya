import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { CATEGORIES, MENU, rupiah } from "../data/menu";

function LevelChips({ item, selected, onSelect }) {
  if (item.levels.length === 1 && item.levels[0] === 0) {
    return (
      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-char/5 px-2.5 py-1 text-[11px] font-bold text-char/60">
        ❄ Non Pedas
      </span>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-[11px] font-bold text-char/45">LEVEL:</span>
      {item.levels.map((lv) => (
        <button
          key={lv}
          onClick={() => onSelect(lv)}
          aria-label={`Level ${lv}`}
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold transition-colors ${
            selected === lv
              ? "bg-chili text-white"
              : "bg-char/60 text-bone/50 hover:text-bone"
          }`}
        >
          {lv}
        </button>
      ))}
    </div>
  );
}

function MenuCard({ item, onAdd }) {
  const [level, setLevel] = useState(item.levels[0]);
  const key = item.levels.length > 1 ? `${item.id}-lv${level}` : item.id;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-bone/10 bg-cream p-5 text-char">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight">
            {item.name}
          </h3>
          <p className="mt-1 text-xs leading-snug text-char/55">{item.desc}</p>
        </div>
        {item.levels.length > 1 && (
          <span className="flex shrink-0 -space-x-1 pt-0.5">
            {Array.from({ length: level }).map((_, i) => (
              <Flame key={i} className="h-4 w-4 fill-chili text-chili" />
            ))}
          </span>
        )}
      </div>
      <div className="mt-4 flex-1" />
      <LevelChips item={item} selected={level} onSelect={setLevel} />
      <div className="mt-3 flex items-center justify-between border-t border-char/10 pt-3">
        <span className="font-display text-lg font-extrabold text-chili">
          {rupiah(item.price)}
        </span>
        <button
          onClick={() => onAdd(key)}
          aria-label={`Tambah ${item.name}`}
          className="flex h-9 items-center gap-1 rounded-full bg-char px-4 text-xs font-bold text-cream transition-transform hover:scale-105"
        >
          <Plus className="h-3.5 w-3.5" /> Pesan
        </button>
      </div>
    </div>
  );
}

export default function MenuSection({ onAdd }) {
  const [active, setActive] = useState(CATEGORIES[0]);
  const items = MENU.filter((m) => m.category === active);

  return (
    <section id="menu" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-extrabold text-cream md:text-5xl">
            Pilih <span className="text-chili">senjata</span> kamu
          </h2>
        </Reveal>

        <div className="sticky top-[68px] z-30 mt-8 flex justify-center">
          <div className="flex gap-1 rounded-full border border-bone/10 bg-char/95 p-1.5 backdrop-blur">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-4 py-2 font-display text-sm font-bold transition-colors sm:px-6 ${
                  active === c ? "text-white" : "text-bone/50 hover:text-bone"
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 rounded-full bg-chili"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((item) => (
                <MenuCard key={item.id} item={item} onAdd={onAdd} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
