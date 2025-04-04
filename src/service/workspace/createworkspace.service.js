export const addWorkService = async (workspaceName) => {
  try {
    if (!workspaceName) {
      throw new Error("Workspace name is required");
    }

    const header = await headerToken();
    console.log("Sending request with headers:", header);

    const response = await fetch("http://96.9.81.187:8080/api/v1/workspace", {
      method: "POST",
      headers: {
        ...header,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workspaceName }), 
    });

    const data = await response.json();
    console.log("Response from API:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to create workspace");
    }

    return data;  
  } catch (error) {
    console.error("Error in addWorkService:", error);
    throw error;  
  }
};
