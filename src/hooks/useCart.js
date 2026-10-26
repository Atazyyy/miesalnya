import { useEffect, useState } from "react";

const KEY = "miesalnya-cart-v1";
// key item: `${id}` untuk tanpa level, `${id}-lv3` untuk bertingkat

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) ?? {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart]);

  const add = (key) => setCart((c) => ({ ...c, [key]: (c[key] ?? 0) + 1 }));
  const remove = (key) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[key]) return next;
      next[key] -= 1;
      if (next[key] <= 0) delete next[key];
      return next;
    });
  const deleteLine = (key) =>
    setCart((c) => {
      const next = { ...c };
      delete next[key];
      return next;
    });

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return { cart, add, remove, deleteLine, count };
}
