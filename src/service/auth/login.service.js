    import { baseUrl } from "../constants";
export const loginService= async (user) => {
    try{
        const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        // console.log('data token :',data.payload.token);
        return data;
    }catch(erro){
        console.log('Error',erro);
    }

}