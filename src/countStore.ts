import { action, atom } from "nanostores";

export const counter = atom(0);

export const increase = action(counter, "increase", (store) => {
  store.set(store.get() + 1);
});

export const decrease = action(counter, "decrease", (store) => {
  store.set(store.get() - 1);
});
