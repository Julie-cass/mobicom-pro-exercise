const API_BASE = "https://exercise.mobicom-pro.com/api";

export const apiFetch = async (endpoint, options = {}) => {
const token = localStorage.getItem("authToken");

if (!token) {
  throw new Error("No authentication token found");
}
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};