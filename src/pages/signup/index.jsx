import styles from "../../styles/signup/index.module.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="item-box">
        <div className="basic-inner login__inner">
          <h2 className="login__title">新規登録</h2>
          <p className="login__msg">
            ※バイタリフィのメールアドレスのみ使用できます。
          </p>
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
            <span className="orange-button__text">新規登録</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { backTo: true } };
};

export default Signup;
