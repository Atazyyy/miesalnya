import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { MENU, rupiah, WA_NUMBER } from "../data/menu";

function parseKey(key) {
  const [id, lv] = key.split("-lv");
  const item = MENU.find((m) => m.id === id);
  return item ? { item, level: lv ? Number(lv) : null } : null;
}

export function lineLabel(entry) {
  const parsed = parseKey(entry[0]);
  if (!parsed) return null;
  const { item, level } = parsed;
  return { ...item, level, qty: entry[1] };
}

export default function CartDrawer({ open, onClose, cart }) {
  const lines = Object.entries(cart.cart)
    .map(lineLabel)
    .filter(Boolean);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const waMessage = () => {
    const rows = lines
      .map(
        (l) =>
          `- ${l.qty}x ${l.name}${l.level ? ` (Level ${l.level})` : ""} (${rupiah(
            l.price * l.qty
          )})`
      )
      .join("\n");
    const text = encodeURIComponent(
      `Halo MieSalnya! Saya mau pesan:\n${rows}\n\nTotal: ${rupiah(total)}\n\nNomor meja: (isi di sini)`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-char/70"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-char shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
              <h2 className="font-display text-xl font-bold text-cream">
                Pesanan <span className="text-chili">({lines.length})</span>
              </h2>
              <button
                onClick={onClose}
                aria-label="Tutup pesanan"
                className="rounded-full p-2 text-bone/60 hover:bg-bone/5 hover:text-bone"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-bone/25" />
                  <p className="mt-4 font-display text-xl font-bold text-cream">
                    Belum ada pesanan
                  </p>
                  <p className="mt-2 max-w-[220px] text-sm text-bone/50">
                    Pilih menu dulu — pedasnya nanti disesuaikan.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 rounded-full bg-chili px-6 py-3 font-display text-sm font-bold text-white"
                  >
                    Lihat Menu
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {lines.map((l) => (
                    <li
                      key={l.id + (l.level ?? "")}
                      className="flex items-center gap-3 rounded-2xl border border-bone/10 bg-cream/5 p-3.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-cream">
                          {l.name}
                          {l.level ? (
                            <span className="ml-1.5 rounded-full bg-chili/20 px-2 py-0.5 text-[11px] font-extrabold text-heat">
                              Lv.{l.level}
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-0.5 text-xs text-bone/50">
                          {rupiah(l.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 rounded-full border border-bone/15 px-2 py-1">
                        <button
                          onClick={() => cart.remove(l.id + (l.level ? `-lv${l.level}` : ""))}
                          aria-label="Kurangi"
                          className="text-bone/60 hover:text-bone"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm font-bold text-cream">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => cart.add(l.id + (l.level ? `-lv${l.level}` : ""))}
                          aria-label="Tambah"
                          className="text-bone/60 hover:text-bone"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => cart.deleteLine(l.id + (l.level ? `-lv${l.level}` : ""))}
                        aria-label="Hapus"
                        className="pl-1 text-xs font-bold text-bone/35 hover:text-chili"
                      >
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-bone/10 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-bone/60">Total</span>
                  <span className="font-display text-2xl font-extrabold text-cream">
                    {rupiah(total)}
                  </span>
                </div>
                <a
                  href={waMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 font-display text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  Pesan via WhatsApp
                </a>
                <p className="mt-2 text-center text-[11px] text-bone/40">
                  Pesanan dikirim ke kasir — sebutkan nomor mejamu.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
