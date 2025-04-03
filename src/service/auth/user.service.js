import headerToken from "@/app/api/auth/[...nextauth]/headerToken";

export const getUser= async () => {
  try{
    const header = await headerToken();
    const res = await fetch(`http://96.9.81.187:8080/api/v1/user`, { headers: header,});
    const data = await res.json();
    return data;
  }catch(error){
    console.log('error',error)
  }
  };