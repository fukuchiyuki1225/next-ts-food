import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ShopList = (props) => {
  const shopList = props.shopList;
  const router = useRouter();
  return (
    <>
      <ul className={styles.shoplist}>
        {shopList.map((shop) => {
          return (
            <li key={shop["id"]} className={styles.shoplist__container}>
              <button
                className={styles.shoplist__button}
                onClick={() => {
                  router.push(`shops/${shop["id"]}`);
                }}
              >
                <div className={["basic-inner"]}>
                  <div className={styles["shoplist__top-contents"]}>
                    <Image
                      src={shop["photo"][0]["pc"][0]["l"][0]}
                      width={238}
                      height={238}
                      alt={shop["name"]}
                      className={styles.shoplist__img}
                    />
                    <div className={styles["shoplist__top-text"]}>
                      <h2 className={styles.shoplist__name}>{shop["name"]}</h2>
                      <h3 className={styles.shoplist__genre}>
                        {shop["genre"][0]["name"]} <br />{" "}
                        {shop["genre"][0]["catch"]}
                      </h3>
                    </div>
                  </div>
                  <dl className={styles.shoplist__dl}>
                    <div className={styles.shoplist__item}>
                      <dt className={styles.shoplist__dt}>営業時間：</dt>
                      <dd>{shop["open"]}</dd>
                    </div>
                    <div className={styles.shoplist__item}>
                      <dt className={styles.shoplist__dt}>定休日：</dt>
                      <dd>{shop["close"]}</dd>
                    </div>
                    <div className={styles.shoplist__item}>
                      <dt className={styles.shoplist__dt}>住所：</dt>
                      <dd>
                        <a
                          className={styles.shoplist__link}
                          href={`https://www.google.com/maps/place/${shop["lat"]}+${shop["lng"]}`}
                          target="_blank"
                        >
                          {shop["address"]}
                        </a>
                      </dd>
                    </div>
                    <div className={styles.shoplist__item}>
                      <dt className={styles.shoplist__dt}>アクセス：</dt>
                      <dd>{shop["access"]}</dd>
                    </div>
                    <div className={styles.shoplist__item}>
                      <dt className={styles.shoplist__dt}>
                        ホット　
                        <br />
                        ペッパー：
                      </dt>
                      <dd>
                        <a
                          href={shop["urls"][0]["pc"]}
                          className={styles.shoplist__link}
                          target="_blank"
                        >
                          {shop["urls"][0]["pc"]}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShopList;
