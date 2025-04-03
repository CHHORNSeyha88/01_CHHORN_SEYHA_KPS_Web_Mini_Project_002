import TaskNotFound from "@/app/(root)/todopage/_components/TaskNotFound";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Clock, Ellipsis } from "lucide-react";

export default function CardComponent({ taskAllbyId }) {
  const tasks = taskAllbyId?.payload || [];

  const formatDate = (date) => {
    if (!date) return "No date available"; // ✅ Fix: Prevent undefined error
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 mt-8">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id || task.taskTitle} className="border border-gray-300 rounded-xl">
            <div className="p-5">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
                <Ellipsis />
              </div>

              {/* Task Details */}
              <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
                {task.taskDetails}
              </p>

              <div className="flex justify-between items-center mt-4">
                {/* Tag */}
                <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                  {task.tag || "No tag"}
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="flex justify-between items-center border-t gap-x-5 border-t-gray-300 p-5">
              <Select>
                <SelectTrigger className="w-36 truncate border-watermelon-red text-watermelon-red">
                  <SelectValue placeholder={task.status || "NOT_STARTED"} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="FINISHED">FINISHED</SelectItem>
                </SelectContent>
              </Select>

              {/* Date */}
              <p className="flex gap-3 items-center text-light-steel-blue">
                <Clock size={22} /> 
                <div>{formatDate(task.startDate)}</div>
              </p>
            </div>
          </div>
        ))
      ) : (
        null
      )}
    </div>
  );
}
