const API_BASE = "https://exercise.mobicom-pro.com/api";

export const fetchAuthToken = async (name) => {
  try {
    const response = await fetch(`${API_BASE}/token`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to generate token");
    }

    const data = await response.json();

    // Save token to localStorage
    localStorage.setItem("authToken", data.token);

    return data.token;
  } catch (error) {
    console.error("Auth error:", error.message);
    throw error;
  }
};