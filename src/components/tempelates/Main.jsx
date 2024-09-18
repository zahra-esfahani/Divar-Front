import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllPosts } from "../../confings/fetchUsersData";
import Loader from "../../modules/Loader";
import { sp } from "../../utils/replaceNumbers";
import styles from "./Main.module.css"
function Main() {
  const { data, isLoading, error } = useQuery(["get-all-posts"], getAllPosts);
  console.log({ data });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.container}>
            {data?.data.posts.map((i) => (
              <div key={i._id} className={styles.card}>
                <div>
                  {/* <p>{i.options.title}</p>
                <span>{i.options.city}</span> */}
                </div>
                <div className={styles.info}>
                  <p>{new Date(i.createdAt).toLocaleDateString("fa-IR")}</p>
                  <span>{sp(i.amount)}تومان</span>
                </div>
                <img src={`${import.meta.env.VITE_BASE_URL}${i.images[0]}`} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Main;
