import React from "react";
import Image from "next/image";
import notfoundtask from "../../../../../public/notfoundtask.gif";
const TaskNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-2xl mx-auto justify-center rounded-lg  p-8">

        <div className=" text-center flex items-center justify-center">
        <Image className="" src={notfoundtask} width={500} height={500} alt="not found" />
        <div>
        <h1 className="text-3xl font-bold text-gray-800 m-10 ">Opp! Don’t Worry! </h1>
        <p className="font-bold text-[1.5rem]">Let’s Find It Together Try Another Path! 🦋</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default TaskNotFound;
