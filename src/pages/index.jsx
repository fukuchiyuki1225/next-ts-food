import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import xml2js from "xml2js";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>えびすごはん</title>
        <meta name="description" content="恵比寿のごはんを記録しましょう！" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main></main>
    </>
  );
}

export const getStaticProps = async () => {
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=82f1e6c8321eb67e&address=恵比寿`;

  const res = await fetch(encodeURI(url));
  let resXml;
  console.log(resXml);

  return { props: { result: url } };
};
