import Shop from "../../components/shop";
import Review from "../../components/review";
import styles from "../../styles/ShopDetail.module.scss";

const ShopDetail = (props) => {
  console.log(props);
  const shop = props.shop[0];
  return (
    <>
      <div className="item-box">
        <Shop shop={shop}></Shop>
      </div>
      <div className={(styles["review-list"], "item-box")}>
        <div className="basic-inner">
          <h2 className={styles["review-list__title"]}>ごはんの感想</h2>
          <Review></Review>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log(context);
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

  return { props: { shop: result } };
};

export default ShopDetail;
