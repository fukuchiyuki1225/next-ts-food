import Shop from "../../components/shop";
import Review from "../../components/review";
import styles from "../../styles/ShopDetail.module.scss";
import { useRouter } from "next/router";

const ShopDetail = (props) => {
  console.log(props);
  const shop = props.shop[0];
  const router = useRouter();
  return (
    <div className={styles["review-list"]}>
      <div className="item-box">
        <Shop shop={shop}></Shop>
      </div>
      <div className="item-box">
        <div className="basic-inner">
          <h2 className={styles["review-list__title"]}>みんなの感想</h2>
          <ul className={styles["review-list__list"]}>
            <Review></Review>
            <Review></Review>
          </ul>
        </div>
      </div>
      <button
        className={`orange-button basic-inner ${styles["review-list__button"]}`}
        onClick={() => {
          router.push({
            pathname: "/writeReview",
            query: { id: shop.id, name: shop.name },
          });
        }}
      >
        <span
          className={`orange-button__text ${styles["review-list__button-text"]}`}
        >
          感想を書く
        </span>
      </button>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&id=${context.query.id}`;
  const res = await fetch(encodeURI(url));
  const resText = await res.text();
  const xml2js = require("xml2js");
  let result = "";
  xml2js.parseString(resText, (e, r) => {
    if (e) {
      console.log(e);
    } else {
      result = r["results"]["shop"];
    }
  });

  return { props: { shop: result, backTo: "/" } };
};

export default ShopDetail;
