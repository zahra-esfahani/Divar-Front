import { getCookie } from "../utils/cookie"
import api from "./api";

const getNewAccessToken= async ()=>{
const refreshToken=getCookie("refreshToken");
if(!refreshToken) return;
try {
    const response= await api.post("auth/check-refresh-token" , {refreshToken})
    return {response};
} catch (error) {
    return {error};
}
}
export {getNewAccessToken}