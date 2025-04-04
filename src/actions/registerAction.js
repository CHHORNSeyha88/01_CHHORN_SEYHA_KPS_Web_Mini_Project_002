"use server";

import { userRegisterSchema } from "@/lib/zod/userSchema";
import { addUserService } from "@/service/auth/register.service";

export const registerAccountAction = async (formData) => {
  try {
    const validatedData = userRegisterSchema.parse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const newUser = await addUserService(validatedData);

    return { success: true, data: newUser };
  } catch (error) {
    console.error("Error in registerAccountAction:", error.message || error);
    return { success: false, error: error.message || "Registration failed." };
  }
};
