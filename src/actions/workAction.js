import { workspaceSchema } from "@/lib/zod/userSchema";
import { addWorkService } from "@/service/workspace/createworkspace.service";

export const workspaceAction = async (formData) => {
  try {
    const validatedData = workspaceSchema.parse({
      workspaceName: formData.get("workspaceName"),
    });

    const newWorkSpace = await addWorkService(validatedData.workspaceName);

    return { success: true, data: newWorkSpace };

  } catch (error) {
    console.error("Error in creating new Workspace:", error.message || error);
    return { success: false, error: error.message || "Failed to create workspace." };
  }
};
