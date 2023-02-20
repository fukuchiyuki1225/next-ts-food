import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {props.backTo === true ? (
          <button
            onClick={() => {
              router.back();
            }}
            className={styles.header__back}
          ></button>
        ) : (
          ""
        )}
        <Link href="/" className={styles.header__titleContainer}>
          <h1 className={styles.header__text}>えびすごはん</h1>
          <Image
            className={styles.header__icon}
            src="/img/icon_logo.png"
            alt="えびすごはん"
            width={128}
            height={128}
          />
        </Link>
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
