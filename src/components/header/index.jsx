import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {props.backTo !== "" ? (
          <Link href={props.backTo} className={styles.header__back}></Link>
        ) : (
          ""
        )}
        <div className={styles.header__titleContainer}>
          <h1 className={styles.header__text}>えびすごはん</h1>
          <Image
            className={styles.header__icon}
            src="/img/icon_logo.png"
            alt="えびすごはん"
            width={128}
            height={128}
          />
        </div>
        <Link href="/login" className={styles.header__loginContainer}>
          <Image
            className={styles.header__loginIcon}
            src="/img/icon_login.png"
            alt="ログイン"
            width={128}
            height={128}
          />
          <p className={styles.header__loginText}>ログイン</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
