import Link from "next/link";

const CompletionSignup = () => {
  return (
    <div className="signup">
      <div className="item-box">
        <div className="basic-inner login__inner">
          <h2 className="login__title">登録が完了しました！</h2>
          <p className="login__msg">
            入力頂いたメールアドレスに
            <br />
            登録完了メールを送信しました。
          </p>
          <Link href="/" className="orange-button login__button">
            <span className="orange-button__text">ごはんを探しましょう</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { backTo: false } };
};

export default CompletionSignup;
