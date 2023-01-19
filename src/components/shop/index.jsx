import styles from "./index.module.scss";
import Image from "next/image";

const Shop = (props) => {
  const shop = props.shop;
  return (
    <div className={styles.shop}>
      <div className={["basic-inner"]}>
        <div className={styles["shop__top-contents"]}>
          <Image
            src={shop["photo"][0]["pc"][0]["l"][0]}
            width={238}
            height={238}
            alt={shop["name"]}
            className={styles.shop__img}
          />
          <div className={styles["shop__top-text"]}>
            <h2 className={styles.shop__name}>{shop["name"]}</h2>
            <h3 className={styles.shop__genre}>
              {shop["genre"][0]["name"]} <br /> {shop["genre"][0]["catch"]}
            </h3>
          </div>
        </div>
        <dl className={styles.shop__dl}>
          <div className={styles.shop__item}>
            <dt className={styles.shop__dt}>営業時間：</dt>
            <dd>{shop["open"]}</dd>
          </div>
          <div className={styles.shop__item}>
            <dt className={styles.shop__dt}>定休日：</dt>
            <dd>{shop["close"]}</dd>
          </div>
          <div className={styles.shop__item}>
            <dt className={styles.shop__dt}>住所：</dt>
            <dd>
              <a
                className={styles.shop__link}
                href={`https://www.google.com/maps/place/${shop["lat"]}+${shop["lng"]}`}
                target="_blank"
              >
                {shop["address"]}
              </a>
            </dd>
          </div>
          <div className={styles.shop__item}>
            <dt className={styles.shop__dt}>アクセス：</dt>
            <dd>{shop["access"]}</dd>
          </div>
          <div className={styles.shop__item}>
            <dt className={styles.shop__dt}>
              ホット　
              <br />
              ペッパー：
            </dt>
            <dd>
              <a
                href={shop["urls"][0]["pc"]}
                className={styles.shop__link}
                target="_blank"
              >
                {shop["urls"][0]["pc"]}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Shop;
