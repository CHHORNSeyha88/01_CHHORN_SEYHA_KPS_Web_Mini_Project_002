import headerToken from "@/app/api/auth/[...nextauth]/headerToken";

export const getAllTaskBySpaceId= async (workSpaceId) => {
  try{
    const header = await headerToken();
    const res = await fetch(`http://96.9.81.187:8080/api/v1/tasks/workspace/${workSpaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        headers: header,
        method:"GET"
      }
    );
    const data = await res.json();
    return data;
  }catch(error){
    console.log('error',error)
  }
  };
  