import Shop from "../../components/shop";
import Review from "../../components/review";
import styles from "../../styles/shops/index.module.scss";
import { useRouter } from "next/router";
import { search } from "../../Utils";

const ShopDetail = (props) => {
  const shop = props.shop[0];
  const router = useRouter();

  return (
    <div className={styles["review-list"]}>
      <div className="item-box">
        <div className="item-box__inner">
          <Shop shop={shop}></Shop>
        </div>
      </div>
      <div className="item-box">
        <div className="item-box__inner">
          <div className="basic-inner">
            <h2 className={styles["review-list__title"]}>みんなの感想</h2>
            <ul className={styles["review-list__list"]}>
              <Review></Review>
              <Review></Review>
            </ul>
          </div>
        </div>
      </div>
      <button
        className={`orange-button basic-inner ${styles["review-list__button"]}`}
        onClick={() => {
          router.push(
            {
              pathname: "/writeReview",
              query: {
                id: shop.id,
                shopName: shop.name,
                star: "",
                title: "",
                name: "",
                food: "",
                date: "",
                image: "",
                textarea: "",
              },
            },
            "/writeReview"
          );
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
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&id=${context.query.id}&format=json`;
  const result = await search(url);

  return {
    props: {
      shop: result,
      backTo: "/",
    },
  };
};

export default ShopDetail;
