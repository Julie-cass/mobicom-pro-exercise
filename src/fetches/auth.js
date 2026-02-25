const BASE_URL = "/api";

export async function generateToken(name) {
  const response = await fetch(`${BASE_URL}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to generate token");
  }

  localStorage.setItem("authToken", data.token);

  return data.token;
}