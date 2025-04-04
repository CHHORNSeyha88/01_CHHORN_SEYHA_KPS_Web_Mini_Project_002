import headerToken from "@/app/api/auth/[...nextauth]/headerToken";

export const updateWorkspaceFavoriteStatus = async (workspaceId, isFavorite) => {
  try {
    
    const header = await headerToken();

    const url = `http://96.9.81.187:8080/api/v1/workspace/${workspaceId}/favorite?favorite=${isFavorite}`;

    const response = await fetch(url, {
      method: "PATCH", 
      headers: header, 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update workspace favorite status");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating workspace favorite status:", error.message || error);
    throw error; 
  }
};