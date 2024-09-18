import { useNavigate } from "react-router-dom";
import { chechOtp } from "../../confings/auth";
import { setCookie } from "../../utils/cookie";
import styles from "./CheckOTPForm.module.css"
import { useQuery } from "@tanstack/react-query";
import { fetchDataProfile } from "../../confings/fetchUsersData";
function CheckOTPForm({code , setCode , phoneNumber , setStep}) {
  const {refetch}=useQuery(["profile"], fetchDataProfile);
  const navigate=useNavigate("/")
    const submitHandler=async (event)=>{
        event.preventDefault();
        if(!/^[0-9]{5}$/.test(code)){
            return;
        }
        const {response , error} = await chechOtp(phoneNumber , code);
        if(response) setCookie(response.data);
        if(error) console.log(error.response.data.message);
        navigate("/")
        refetch();
        console.log(response , error);
        
    }
    console.log(phoneNumber);
  return (
    <>
      <div>
        <form onSubmit={submitHandler} className={styles.form}>
          {" "}
          <h3>ورود به حساب کاربری</h3>
          <p>
            کد پیامک شده به {phoneNumber} را وارد کنید
          </p>
          <label htmlFor="input">کد تایید را وارد کنید</label>
          <input
            type="text"
            id="input"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
          />
          <button type="submit">ورود</button>
          <button onClick={()=>setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>

        </form>
      </div>
    </>
  );
}

export default CheckOTPForm;
