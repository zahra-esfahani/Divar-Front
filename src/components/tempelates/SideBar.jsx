import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../confings/category";
import Loader from "../../modules/Loader";
import styles from "./SideBar.module.css";
function SideBar() {
  const { data, isLoading } = useQuery(["category-list"], getCategory);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.sidebar}>
            <h4>دسته ها</h4>
            <ul>
              {data?.data.map((i) => (
                <li key={i._id}>
                  <img src={`${i.icon}.svg`} />
                  <h5>{i.name}</h5>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
