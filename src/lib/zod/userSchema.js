  import { z } from "zod";

  export const userRegisterSchema = z.object({
    username: z
      .string({ required_error: "Username is required" }) 
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(50, { message: "Username must not exceed 50 characters" }),
    
    email: z
      .string({ required_error: "Email is required" }) 
      .email({ message: "Invalid email format" }) 
      .min(3, { message: "Email must be at least 3 characters long" })
      .max(50, { message: "Email must not exceed 50 characters" }),
    
    password: z
      .string({ required_error: "Password is required" }) 
      .min(6, { message: "Password must be at least 6 characters long" }) 
      .max(50, { message: "Password must not exceed 50 characters" }),
  });


  export const workspaceSchema = z.object({
    workspaceName: z
      .string({ required_error: "Workspace name is required" })
      .min(3, { message: "Workspace name must be at least 3 characters long" })
      .max(50, { message: "Workspace name must not exceed 50 characters" }),
  });
  
