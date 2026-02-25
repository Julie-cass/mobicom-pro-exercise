const BASE_URL = "/api";

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }

  return response.json();
}