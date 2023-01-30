import styles from "../../styles/myPage/index.module.scss";

const MyPage = () => {
  return (
    <div className="item-box">
      <div className="item-box__inner">
        <div className="basic-inner">
          <h2 className={styles.myPage__title}>ぶいまるさんのマイページ</h2>
          <div className={styles.myPage__nickname}>
            <h3 className={styles.myPage__heading}>ニックネーム変更</h3>
          </div>
          <div className={styles.myPage__review}>
            <h3 className={styles.myPage__heading}>感想一覧</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = (async) => {
  return { props: { backTo: "/" } };
};

export default MyPage;
