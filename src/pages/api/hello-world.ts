export async function post({ request }) {
  const data = await request.json();
  return new Response(JSON.stringify({ msg: `"Hello ${data.message}!"` }), {
    status: 200,
  });
}
