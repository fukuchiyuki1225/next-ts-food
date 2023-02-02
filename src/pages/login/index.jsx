import styles from "../../styles/login/index.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className="item-box">
        <div className={`basic-inner ${styles.login__inner}`}>
          <h2 className={styles.login__title}>ログイン</h2>
          <form className={`form ${styles.login__form}`} action="submit">
            <div className="form__item--column">
              <label className="form__label heading-deco" htmlFor="email">
                メールアドレス
              </label>
              <input
                className="form__input"
                id="email"
                name="email"
                type="email"
                placeholder="buimaru@vitalify.jp"
              />
            </div>
            <div className="form__item--column">
              <label className="form__label heading-deco" htmlFor="password">
                パスワード
              </label>
              <input
                className="form__input"
                id="password"
                name="password"
                type="password"
                placeholder="パスワードを入力してください"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { backTo: "/" } };
};

export default Login;
