"use client";

import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FolderPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workspaceAction } from "@/actions/workAction";
import { workspaceSchema } from "@/lib/zod/userSchema";

const AddNewWorkSpaceComponent = () => {
  const {
    register, 
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(workspaceSchema),
  });

  const handleAddNewWorkSpace = async (data) => {
    console.log("Form submitted with data:", data); 
    try {
      const response = await workspaceAction(data);  
      console.log("Workspace creation response:", response);
      if (response.success) {
        alert("Workspace created successfully!");
        reset(); 
      } else {
        alert("Failed to create workspace: " + response.error);
      }
    } catch (error) {
      console.error("Error in handleAddNewWorkSpace:", error);
      alert("An error occurred while creating the workspace.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FolderPlus size={40} />
        </Button>
      </DialogTrigger>

      <form onSubmit={handleSubmit(handleAddNewWorkSpace)}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Add New Workspace</DialogTitle>
            <DialogDescription>Fill in the details to create a new workspace.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="workspaceName" className="text-right">Workspace</Label>
              <Input
                {...register("workspaceName")}
                id="workspaceName"
                className="col-span-3"
                placeholder="Enter workspace name"
              />
              {errors.workspaceName && <p className="text-red-500 text-sm">{errors.workspaceName.message}</p>}
            </div>
          </div>

          <DialogFooter>
            <button type="submit" className="cursor-pointer bg-black text-white rounded-3xl w-20 h-10 hover:bg-gray-800">Save</button>
          </DialogFooter>

        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddNewWorkSpaceComponent;
