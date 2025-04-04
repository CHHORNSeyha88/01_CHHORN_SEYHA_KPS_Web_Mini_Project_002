export const addUserService = async (userData) => {
  try {
    const response = await fetch("http://96.9.81.187:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors", // Ensure CORS is handled correctly
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to register account");
    }
    return data;
  } catch (error) {
    console.error("Error in addUserService:", error);
    throw error;
  }
};
