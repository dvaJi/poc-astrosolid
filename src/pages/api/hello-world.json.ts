import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params, request }) => {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const randomUser = (data as any).results[0];
  return {
    body: JSON.stringify({ msg: `"Hello ${randomUser.name.first}!"` }),
  };
};
