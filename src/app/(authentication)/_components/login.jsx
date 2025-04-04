"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginComponent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading

    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...data,
      });

      if (res?.ok) {
        router.push("/todopage"); // Redirect on success
      } else {
        alert("Login failed. Please check your credentials."); // Handle failure
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await signIn("google", { redirect: false });
      if (res?.ok) {
        router.push("/todopage");
      } else {
      }
    } catch (error) {
      console.error("Google login error:", error); 
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <form className="space-y-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <Mail size={20} /> Email
        </Label>

        <Input
          type="text"
          placeholder="Please type your email"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("email", { required: true })}
        />
      </div>

      {/* Password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>

        <Input
          type="password"
          placeholder="Please type your password"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("password", { required: true })}
        />
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        disabled={isLoading} // Disable the button while loading
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold relative overflow-hidden"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
          </div>
        ) : (
          "Login"
        )}
      </Button>

      {/* Underline */}
      <div>
        <div className="border-b border-b-light-steel-blue"></div>
        <div className="capitalize text-right mt-2 font-normal">
          Create new account?{" "}
          <Link
            href={"/register"}
            className="hover:text-persian-green hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>

     {/* Google Sign-In Button */}
     <div className="bg-ghost-white rounded-lg text-center">
        <Button
          type="button"
          onClick={handleGoogleLogin} // Handle Google login
          className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50 cursor-pointer"
        >
          <img src="/Google Icon.svg" alt="google icon" /> Login with Google
        </Button>
      </div>
    </form>
  );
}