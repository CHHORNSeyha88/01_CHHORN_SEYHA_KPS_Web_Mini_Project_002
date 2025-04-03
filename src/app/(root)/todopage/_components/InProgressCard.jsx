import React from "react";
import CardComponent from "@/components/card";

const InProgressCard = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <CardComponent key={task.id} taskAllbyId={{ payload: [task] }} />
      ))}
    </>
  );
};

export default InProgressCard;
