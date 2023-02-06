import { useRouter } from "next/router";
import Shop from "../shop";
import styles from "./index.module.scss";

const ShopList = (props) => {
  const shopList = props.shopList;
  const router = useRouter();
  return (
    <ul className={styles["shopList"]}>
      {shopList.map((shop) => {
        return (
          <li key={shop["id"]} className="item-box">
            <button
              className="item-box__inner"
              key={shop["id"]}
              onClick={() => {
                router.push({
                  pathname: `shops/${shop["id"]}`,
                });
              }}
            >
              <Shop shop={shop}></Shop>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShopList;
