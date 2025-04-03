import React from "react";
import NotStartedCard from "./_components/NotStartedCard";
import InProgressCard from "./_components/InProgressCard";
import FinishedCard from "./_components/FinishedCard";
import TaskNotFound from "@/app/(root)/todopage/_components/TaskNotFound";
import { FolderHeart } from "lucide-react";
import Link from "next/link";

const AllCardTodo = async ({ taskAllbyId }) => {
  const { payload } = taskAllbyId || { payload: [] };

  // Filter tasks based on status
  const taskNotStarted = payload?.filter((item) => item.status === "NOT_STARTED");
  const taskInProgress = payload?.filter((item) => item.status === "IN_PROGRESS");
  const taskFinished = payload?.filter((item) => item.status === "FINISHED");

  const isEmpty = !taskNotStarted?.length && !taskInProgress?.length && !taskFinished?.length;

  return (
    <main className="min-h-screen -mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-14">
          <h1 className="text-2xl font-bold text-gray-800 mb-10">{payload?.taskTitle || "Tasks"}</h1>
          <Link href="/favorite">
            <FolderHeart size={30} />
          </Link>
        </div>

        {/* Show TaskNotFound if there are no tasks */}
        {isEmpty ? (
          <TaskNotFound />
        ) : (
          <div className="grid grid-cols-3 gap-6 px-10">
            {/* Not Started */}
            <div>
              <h2 className="text-[#F96666] border-b pb-2 text-lg font-bold">Not Started</h2>
              <div className="space-y-4">
                <NotStartedCard tasks={taskNotStarted} />
              </div>
            </div>

            {/* In Progress */}
            <div>
              <h2 className="text-[#4379F2] border-b pb-2 text-lg font-bold">In Progress</h2>
              <div className="space-y-4">
                <InProgressCard tasks={taskInProgress} />
              </div>
            </div>

            {/* Finished */}
            <div>
              <h2 className="text-[#009990] border-b pb-2 text-lg font-bold">Finished</h2>
              <div className="space-y-4">
                <FinishedCard tasks={taskFinished} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllCardTodo;
