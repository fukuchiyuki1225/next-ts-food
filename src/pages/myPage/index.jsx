import styles from "../../styles/myPage/index.module.scss";
import Review from "../../components/review";
import Modal from "../../components/modal";
import { useState } from "react";

const MyPage = () => {
  const [isEditNickname, setIsEditNickname] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const clickEditNickname = () => {
    setIsEditNickname(true);
  };

  const editNickname = () => {
    setIsEditNickname(false);
  };

  return (
    <div className="item-box">
      <div className="item-box__inner">
        <div className="basic-inner">
          <h2 className={`${styles.myPage__title} heading-deco`}>
            ぶいまるさんのマイページ
          </h2>
          <div className={`${styles.myPage__nickname} heading-deco`}>
            <h3 className={styles.myPage__heading}>
              {isEditNickname ? (
                <>
                  <input
                    id="nickname"
                    className={styles.myPage__input}
                    type="text"
                    name="nickname"
                  />
                  <button
                    className={styles["myPage__button--edit"]}
                    onClick={() => {
                      editNickname();
                    }}
                  >
                    変更
                  </button>
                </>
              ) : (
                <button
                  className={styles["myPage__button--nickname"]}
                  onClick={() => clickEditNickname()}
                >
                  ニックネーム変更
                </button>
              )}
            </h3>
          </div>
          <div className={styles.myPage__review}>
            <h3 className={styles.myPage__heading}>感想一覧</h3>
            <div className={styles["myPage__review-item"]}>
              <Review myPage={true} setIsDelete={setIsDelete}></Review>
              <Review myPage={true} setIsDelete={setIsDelete}></Review>
            </div>
          </div>
        </div>
      </div>
      {isDelete ? (
        <Modal>
          <div className={styles.myPage__modal}>
            <p className={styles.myPage__text}>感想を削除しますか？</p>
            <div className={styles["myPage__button-container"]}>
              <button className={styles["myPage__modal-button"]}>削除</button>
              <button
                className={styles["myPage__modal-button--cancel"]}
                onClick={() => {
                  setIsDelete(false);
                }}
              >
                キャンセル
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { backTo: "/" } };
};

export default MyPage;
