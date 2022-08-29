import { createResource, createSignal } from "solid-js";
import { BASE_API } from "../utils/url";

const fetchUser = async (id) => (await fetch(`${BASE_API}/api/users`)).json();

export default function User() {
  const [userId, setUserId] = createSignal();
  const [user] = createResource(userId, fetchUser);

  return (
    <>
      <div class="mt-6 flex border rounded-lg p-6">
        <input
          type="number"
          min="1"
          placeholder="Enter Numeric Id"
          onInput={(e) => setUserId(e.currentTarget.value)}
        />
        <span>{user.loading && "Loading..."}</span>
        <div>
          <pre>{user()?.name.first}</pre>
        </div>
      </div>
    </>
  );
}
