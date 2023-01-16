import Layout from "../../layouts/layout/layout";
import { useRouter } from "next/router";

const Shop = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>{props.shop[0].name}</h1>
    </Layout>
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

  return { props: { shop: result } };
};

export default Shop;
