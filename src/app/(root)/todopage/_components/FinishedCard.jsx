import React from 'react';
import CardComponent from '@/components/card';

const FinishedCard = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <CardComponent key={index} taskAllbyId={{ payload: [task] }} />
      ))}
    </>
  );
};

export default FinishedCard;
