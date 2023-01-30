import ShopList from "../components/shopList";

export default function Home(props) {
  const shopList = props.result;
  return <ShopList shopList={shopList}></ShopList>;
}

export const getStaticProps = async () => {
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&address=恵比寿&count=20`;
  const res = await fetch(encodeURI(url));
  const resText = await res.text();
  const xml2js = require("xml2js");
  let result;
  xml2js.parseString(resText, (e, r) => {
    if (e) {
      console.log(e);
    } else {
      result = r["results"]["shop"];
    }
  });

  return { props: { result: result, backTo: "" } };
};
