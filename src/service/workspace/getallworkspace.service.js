
import headerToken from "@/app/api/auth/[...nextauth]/headerToken";

export const getAllWorkSpaces= async () => {
    // since headerToken is an async function that why we need to use await
  try{
    const header = await headerToken();
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`, { headers: header,});
    const data = await res.json();
    // console.log('data getallworkspaces',data.payload);
    return data;
  }catch(error){
    console.log('error',error)
  }
  };
  