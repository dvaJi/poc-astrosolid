import fetch from "node-fetch";

export async function get({ query }) {
  console.log("users");

  let randomUser = null;

  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    randomUser = (data as any).results[0];
  } catch (err) {
    randomUser = { msg: "Error" };
  }

  return new Response(JSON.stringify(randomUser), {
    status: 200,
  });
}
