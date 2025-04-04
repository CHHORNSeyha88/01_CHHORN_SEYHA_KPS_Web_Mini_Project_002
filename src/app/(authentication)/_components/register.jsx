"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAccountAction } from "@/actions/registerAction";
import { userRegisterSchema } from "@/lib/zod/userSchema";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default function RegisterComponent() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userRegisterSchema) });

  const onSubmit = async (userData) => {
    try {
      const formData = new FormData();  // Use FormData API
      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
  
      console.log("FormData before sending:", Object.fromEntries(formData));
  
      const response = await registerAccountAction(formData);
      console.log("API Response:", response);
      
      if (response.success) {
        alert("Registration successful!");
        router.push("/login"); 
      } else {
        alert(response.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.message || "An error occurred during registration. Please try again.");
    }
  };
  

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Username */}
      <div>
        <Label htmlFor="username" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
          <UserRound size={20} /> Username
        </Label>
        <Input id="username" type="text" placeholder="Username" {...register("username")} />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
          <Mail size={20} /> Email
        </Label>
        <Input id="email" type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
          <KeyRound size={20} /> Password
        </Label>
        <Input id="password" type="password" placeholder="Password" {...register("password")} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="bg-persian-green text-white py-2.5 rounded-lg w-full font-bold">
        Sign Up
      </Button>

      <div className="text-right mt-2">
        Already have an account? <Link href={"/login"} className="hover:text-persian-green hover:underline">Login</Link>
      </div>
    </form>
  );
}
