import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "../../confings/category";
import styles from "./AddPost.module.css";
import { getCookie } from "../../utils/cookie";
import axios from "axios";
function AddPost() {
  const { data, isLoading } = useQuery(["category-list"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount:null,
    images: null,
  });
  const changeHandler = (event) => {
    if (event.target.name !== "images") {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
    }
  };
  const clickHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const Token = getCookie("accessToken");
    axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:`bearer ${Token}`,
      },
    }).then((res)=>console.log(res)).catch((error)=>console.log(error.message))
  };
  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content"></textarea>
      <label htmlFor="amount">قیمت</label>
      <input type="number" id="amount" name="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" id="city" name="city" />
      <label htmlFor="category">دسته بندی</label>
      <select id="category" name="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" id="images" name="images" />
      <button onClick={clickHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
