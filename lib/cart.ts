"use client";

import { useSyncExternalStore } from "react";
import { parseQ, type ColorId, type Mode } from "./catalog";

export type CartLine = { key: string; id: string; color: ColorId; mode: Mode; qty: string };
type State = { items: CartLine[]; waste: boolean; open: boolean; menuOpen: boolean };

const STORAGE_KEY = "trama-cart-v3";
const SERVER_STATE: State = { items: [], waste: true, open: false, menuOpen: false };

let state: State = SERVER_STATE;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const c = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (c && Array.isArray(c.items)) state = { ...state, items: c.items, waste: c.waste !== false };
  } catch {}
}

function set(patch: Partial<State> | ((s: State) => Partial<State>)) {
  load();
  const prev = state;
  state = { ...state, ...(typeof patch === "function" ? patch(state) : patch) };
  if (prev.items !== state.items || prev.waste !== state.waste) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items, waste: state.waste }));
    } catch {}
  }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const getSnapshot = () => {
  load();
  return state;
};

export const useCart = () => useSyncExternalStore(subscribe, getSnapshot, () => SERVER_STATE);

export const cart = {
  add(id: string, color: ColorId = "gris", mode: Mode = "m2", qty = "10") {
    set((s) => {
      const i = s.items.findIndex((l) => l.id === id && l.color === color);
      let items: CartLine[];
      if (i >= 0) {
        items = s.items.slice();
        const l = items[i];
        items[i] = l.mode === mode ? { ...l, qty: String(parseQ(l.qty) + parseQ(qty)) } : { ...l, mode, qty };
      } else {
        items = [...s.items, { key: `${id}-${color}-${Date.now()}`, id, color, mode, qty }];
      }
      return { items, open: true, menuOpen: false };
    });
  },
  update(key: string, patch: Partial<CartLine>) {
    set((s) => ({ items: s.items.map((l) => (l.key === key ? { ...l, ...patch } : l)) }));
  },
  remove(key: string) {
    set((s) => ({ items: s.items.filter((l) => l.key !== key) }));
  },
  toggleWaste() {
    set((s) => ({ waste: !s.waste }));
  },
  open() {
    set({ open: true, menuOpen: false });
  },
  close() {
    set({ open: false });
  },
  toggleMenu() {
    set((s) => ({ menuOpen: !s.menuOpen }));
  },
  /** Al navegar se cierran el carrito y el menú, como en el prototipo. */
  closeAll() {
    if (state.open || state.menuOpen) set({ open: false, menuOpen: false });
  },
};
