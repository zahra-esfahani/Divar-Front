import React from "react";
import styles from "./SendOTPForm.module.css"
import {sendOtp} from "../../confings/auth";

function SendOTPForm({ setPhoneNumber,setStep, phoneNumber }) {
    const submitHandler= async(event)=>{
        event.preventDefault();
        if(!/^09[0-9]{9}$/.test(phoneNumber)) {
            console.log("ohh");
            return
        }
        const{response , error}= await sendOtp(phoneNumber);
        if(response) setStep(2);
        if(error) console.log(error.response.data.message);
    }
  return (
    <>
      <div>
        <form onSubmit={submitHandler} className={styles.form}>
          {" "}
          <h3>ورود به حساب کاربری</h3>
          <p>
            برای استفاده از امکانات، لطفا شماره موبایل خود را وارد نمایید.کد
            تایید به این شماره پیامک خواهد شد.
          </p>
          <label htmlFor="input">شماره موبایل خود را وارد نمایید</label>
          <input
            type="text"
            id="input"
            placeholder="شماره موبایل خود را وارد نمایید"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">تایید</button>
        </form>
      </div>
    </>
  );
}

export default SendOTPForm;
