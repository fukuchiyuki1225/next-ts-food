import styles from "./index.module.scss";
import Image from "next/image";

const ShopList = (props) => {
  const shopList = props.shopList;
  console.log(shopList);
  return (
    <>
      <ul>
        <li>
          <Image
            src={shopList[0]["logo_image"][0]}
            width={69}
            height={42}
            alt={shopList[0]["name"]}
          />
          <Image
            src={shopList[0]["photo"][0]["pc"][0]["l"][0]}
            width={238}
            height={238}
            alt={shopList[0]["name"]}
          />
          <dl>
            <h2>{shopList[0]["name"]}</h2>
            <h3>
              {shopList[0]["genre"][0]["name"]} /{" "}
              {shopList[0]["genre"][0]["catch"]}
            </h3>
            <div>
              <dt>営業時間：</dt>
              <dd>{shopList[0]["open"]}</dd>
            </div>
            <div>
              <dt>定休日：</dt>
              <dd>{shopList[0]["close"]}</dd>
            </div>
            <div>
              <dt>住所：</dt>
              <dd>{shopList[0]["address"]}</dd>
            </div>
            <div>
              <dt>アクセス：</dt>
              <dd>{shopList[0]["access"]}</dd>
            </div>
          </dl>
        </li>
      </ul>
    </>
  );
};

export default ShopList;
