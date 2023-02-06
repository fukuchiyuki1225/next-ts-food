import ShopList from "../components/shopList";
import Search from "../components/search";
import Sort from "../components/sort";
import { useState, useRef } from "react";

export default function Home(props) {
  const [shopList, setShopList] = useState(props.result);
  const [sort, setSort] = useState("4");
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");
  const [hasLunch, setHasLunch] = useState(false);
  const conditionsFunc = {
    setKeyword: setKeyword,
    setGenre: setGenre,
    setHasLunch: setHasLunch,
  };
  return (
    <>
      <Sort setSort={setSort}></Sort>
      <Search conditionsFunc={conditionsFunc}></Search>
      <ShopList shopList={shopList}></ShopList>
    </>
  );
}

const search = async (url) => {
  const res = await fetch(encodeURI(url));
  const resJson = await res.json();
  return resJson["results"]["shop"];
};

export const getStaticProps = async () => {
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&address=恵比寿&count=20&format=json`;
  const result = await search(url);

  return { props: { result: result, backTo: "" } };
};
