import { useRouter } from "next/router";
import Shop from "../shop";

const ShopList = (props) => {
  const shopList = props.shopList;
  const router = useRouter();
  return (
    <>
      <ul>
        {shopList.map((shop) => {
          return (
            <button
              key={shop["id"]}
              className="item-box"
              onClick={() => {
                router.push({
                  pathname: `shops/${shop["id"]}`,
                });
              }}
            >
              <li key={shop["id"]}>
                <Shop shop={shop}></Shop>
              </li>
            </button>
          );
        })}
      </ul>
    </>
  );
};

export default ShopList;
