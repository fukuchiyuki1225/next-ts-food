import styles from "../../styles/login/index.module.scss";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <div className="item-box">
        <div className="basic-inner login__inner">
          <h2 className="login__title">ログイン</h2>
          <form className="form login__form" action="submit">
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
          <button className="orange-button login__button">
            <span className="orange-button__text">ログイン</span>
          </button>
          <Link href="/signup" className="white-button login__button">
            <span className="white-button__text">新規登録はこちら</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { backTo: true } };
};

export default Login;
