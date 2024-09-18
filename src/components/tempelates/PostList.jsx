import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../confings/fetchUsersData"
import Loader from "../../modules/Loader";
import { sp } from "../../utils/replaceNumbers";
import styles from "./PostList.module.css"
function PostList() {
    const{data , isLoading , error}=useQuery(["my-post-list"] , getPosts);
    console.log(data);
    
  return (
    <>
    {isLoading ? <Loader/>: <>
    <div className={styles.list}>
    <h3>آگهی های شما</h3>
    {data?.data.posts.map((i)=>(<div key={i._id} className={styles.post}>
            <img src={`${import.meta.env.VITE_BASE_URL}${i.images[0]}`}  />
            <div>
                <p>{i.options.title}</p>
                <span>{i.options.content}</span>
            </div>
            <div className={styles.price}>
                <p>{new Date(i.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(i.amount)}تومان</span>
            </div>
    </div>))}
    </div>
    </>}
    
    </>
  )
}

export default PostList;