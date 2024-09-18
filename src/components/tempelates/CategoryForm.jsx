import { useState } from "react"
import styles from "./CategoryForm.module.css"
import { useMutation } from "@tanstack/react-query"
import { addCategory } from "../../confings/category"
function CategoryForm() {
    const[form , setForm]=useState({name:"" , slug:"" , icon:""})
    const{mutate , isLoading , error , data}=useMutation(addCategory);
    console.log({isLoading , error  , data});
    const changeHandler=(event)=>{
        setForm({...form , [event.target.name]:event.target.value})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(!form.name || !form.name ||!form.slug) return;
        mutate(form)
    }
  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
        <h3>ایجاد دسته بندی</h3>
        {!!error && <p>مشکلی پیش آمده است</p>}
        {data?.status===201 && <p>دسته بندی افزوده شد</p>}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" id="name" name="name"/>
        <label htmlFor="slug">اسلاگ</label>
        <input type="text" id="slug" name="slug"/>
        <label htmlFor="icon">آیکون</label>
        <input type="text" id="icon" name="icon"/>
        <button type="submit">ایجاد</button>
    </form>
  )
}

export default CategoryForm