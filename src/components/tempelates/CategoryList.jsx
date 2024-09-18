import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../confings/category";
import Loader from "../../modules/Loader";
import styles from "./CategoryList.module.css";
function CategoryList() {
  const { data, isLoading, error } = useQuery(["category-list"], getCategory);

  console.log(data, isLoading, error);
  return (
    <>
      <div className={styles.list}>
        {isLoading ? (
          <Loader />
        ) : (
          data.data.map((i) => (
            <div key={i._id}>
              <img src={`${i.icon}.svg`} alt="" />
              <h5>{i.name}</h5>
              <p>slug {i.slug}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CategoryList;
