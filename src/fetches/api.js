const API_BASE = "https://exercise.mobicom-pro.com/api";


export const generateToken = async (name) => {
  const response = await fetch(`${API_BASE}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate token");
  }

  const data = await response.json();

  localStorage.setItem("authToken", data.token);

  console.log("TOKEN:", data.token);

  return data.token;
};


export const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No authentication token found");
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("API error:", errorData);
    throw new Error("API request failed");
  }

  return response.json();
};


export const getDevices = async () => {
  return await apiFetch("/devices", {
    method: "GET",
  });

  
};