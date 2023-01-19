import Head from "next/head";
import Header from "../../components/header";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>えびすごはん</title>
        <meta name="description" content="恵比寿のごはんを記録しましょう！" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header layout={children.props.layout}></Header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
