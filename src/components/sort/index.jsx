import styles from "./index.module.scss";
import { useState } from "react";

const Sort = () => {
  const [isRecommend, setIsRecommend] = useState(true);
  return (
    <div className={`${styles.sort} basic-inner`}>
      <button
        className={
          isRecommend ? styles["sort__button--active"] : styles.sort__button
        }
        onClick={() => {
          setIsRecommend(true);
        }}
      >
        おすすめ順
      </button>
      <button
        className={
          isRecommend ? styles.sort__button : styles["sort__button--active"]
        }
        onClick={() => {
          setIsRecommend(false);
        }}
      >
        距離順
      </button>
    </div>
  );
};

export default Sort;
