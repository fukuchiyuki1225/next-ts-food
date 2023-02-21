import ShopList from "../components/shopList";
import Search from "../components/search";
import Sort from "../components/sort";
import { useState, useRef } from "react";
import { search } from "../Utils";

export default function Home(props) {
  const [shopList, setShopList] = useState(props.shops);
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
      <Search conditionsFunc={conditionsFunc} genre={props.genre}></Search>
      <ShopList shopList={shopList}></ShopList>
    </>
  );
}

export const getStaticProps = async () => {
  const gourmetUrl = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&address=恵比寿&count=20&format=json`;
  const gourmetResult = await search(gourmetUrl);

  const genreUrl = `http://webservice.recruit.co.jp/hotpepper/genre/v1/?key=82f1e6c8321eb67e&format=json`;
  const res = await fetch(encodeURI(genreUrl));
  const resJson = await res.json();
  const genreResult = resJson["results"]["genre"];

  return { props: { shops: gourmetResult, genre: genreResult, backTo: false } };
};
