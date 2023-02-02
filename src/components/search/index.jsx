import styles from "./index.module.scss";
import Image from "next/image";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className="basic-inner">
        <div className={styles["search__container"]}>
          <div className={styles["search__input-container"]}>
            <input
              className={styles.search__input}
              id="keyword"
              name="keyword"
              type="text"
              placeholder="ごはんを探す"
            />
          </div>
          <button className={styles.search__mixer}>
            <Image
              src="/img/icon_mixer.png"
              width={35}
              height={35}
              alt="絞り込み"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
