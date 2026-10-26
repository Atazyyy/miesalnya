import { motion } from "framer-motion";
import { Flame, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-chili/40 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-heat/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 text-center md:px-8 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm font-bold uppercase tracking-[0.3em] text-heat"
        >
          Menu Digital — Salam Pedas!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-6xl leading-none font-extrabold text-cream md:text-8xl"
        >
          MIE <span className="text-chili">SALNYY</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          {[1, 2, 3, 4, 5].map((lv) => (
            <Flame
              key={lv}
              className={`h-7 w-7 md:h-9 md:w-9 ${
                lv <= 3 ? "fill-heat text-heat" : "fill-chili text-chili"
              }`}
            />
          ))}
          <span className="ml-2 font-display text-xl font-bold text-cream/80 md:text-2xl">
            LEVEL 1–5
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/70"
        >
          Pedasnya dare, rasanya nagih. Scan menu, pilih level, pesan —
          tanpa perlu tanganin tungan lama-lama.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#menu"
            className="flex items-center gap-2 rounded-full bg-chili px-8 py-3.5 font-display text-base font-bold text-white transition-transform hover:scale-105"
          >
            <UtensilsCrossed className="h-5 w-5" />
            Lihat Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
