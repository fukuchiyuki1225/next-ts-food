import styles from "./index.module.scss";
import Image from "next/image";
import { useState } from "react";
import Filter from "../filter";

const Search = (props) => {
  const [openFilter, setOpenFilter] = useState(false);

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
          <button
            className={styles.search__mixer}
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            <Image
              src="/img/icon_mixer.png"
              width={35}
              height={35}
              alt="絞り込み"
            ></Image>
          </button>
        </div>
      </div>
      <Filter openFilter={openFilter} genre={props.genre}></Filter>
    </div>
  );
};

export default Search;
