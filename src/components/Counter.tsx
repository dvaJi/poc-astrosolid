import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { counter, decrease, increase } from "../countStore";

export default function Counter({ children }) {
  const count = useStore(counter);

  return (
    <>
      <div class="flex border rounded-lg p-6">
        <button class="border px-2 hover:shadow" onClick={decrease}>
          -
        </button>
        <pre class="mx-4 font-bold">{count}</pre>
        <button class="border px-2 hover:shadow" onClick={increase}>
          +
        </button>
      </div>
      <div class="mt-4">{children}</div>
    </>
  );
}
