import { getAllTaskBySpaceId } from '@/service/workspace/getallTask.service';
import React from 'react'
import SideBarComponent from '../_components/SideBarComponent';
import CardComponent from '@/components/card';
import AllCardTodo from '../page';

const getTaskBySpaceID = async ({params}) => {
      const id = await params?.spaceId.trim();
      const taskAllbyId = await getAllTaskBySpaceId(id);      
  return (
    <>
    <AllCardTodo taskAllbyId={taskAllbyId}/>
    {/* leng trov ka */}
      {/* <CardComponent taskAllbyId={taskAllbyId}/> */}
    </>
  )
}

export default getTaskBySpaceID
