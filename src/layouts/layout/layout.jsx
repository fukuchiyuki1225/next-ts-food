import Head from "next/head";
import Header from "../../components/header";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header backTo={children.props.backTo}></Header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
