import { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Modal from "../modal";

const Review = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openImg, setOpenImg] = useState("");

  const toggleModal = (openImg) => {
    setIsOpen(!isOpen);
    setOpenImg(openImg);
  };

  return (
    <div className={styles.review}>
      <div className={styles["review__top-container"]}>
        <div className={styles["review__left-contents"]}>
          <div className="star-container">
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className="star"
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className="star"
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className="star"
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className="star"
            />
            <Image
              src="/img/icon_star.png"
              width={32}
              height={32}
              alt="星"
              className="star"
            />
          </div>
          <h3 className={styles.review__title}>おいしかった〜</h3>
        </div>
        <dl className={styles.review__dl}>
          {props.myPage ? (
            <div className={styles["review__icon-container"]}>
              <button className={styles.review__edit}>
                <Image
                  src="/img/icon_edit.png"
                  width={32}
                  height={32}
                  alt="編集"
                  className={styles.review__icon}
                ></Image>
              </button>
              <button
                className={styles.review__delete}
                onClick={() => {
                  props.setIsDelete(true);
                }}
              >
                <Image
                  src="/img/icon_delete.png"
                  width={32}
                  height={32}
                  alt="削除"
                  className={styles.review__icon}
                ></Image>
              </button>
            </div>
          ) : (
            ""
          )}
          <div className={styles.review__item}>
            <dt className={styles.review__dt}>投稿者：</dt>
            <dd className={styles.review__dd}>ぶいまるさん</dd>
          </div>
          <div className={styles.review__item}>
            <dt className={styles.review__dt}>食べたごはん：</dt>
            <dd className={styles.review__dd}>おもち</dd>
          </div>
          <div className={styles.review__item}>
            <dt className={styles.review__dt}>食べた日：</dt>
            <dd className={styles.review__dd}>2022/12/05(月)</dd>
          </div>
          <div className={styles.review__item}>
            <dt className={styles.review__dt}>投稿日：</dt>
            <dd className={styles.review__dd}>2022/12/08(木)</dd>
          </div>
        </dl>
      </div>
      <div className={styles["review__img-container"]}>
        <button
          onClick={() => {
            toggleModal("/img/img_example-omochi.jpeg");
          }}
          className={styles["review__img-wrapper"]}
        >
          <Image
            src="/img/img_example-omochi.jpeg"
            width={128}
            height={96}
            alt="ごはんイメージ"
            className={styles.review__img}
          />
        </button>
        <button
          onClick={() => {
            toggleModal("/img/img_example-omochi2.jpeg");
          }}
          className={styles["review__img-wrapper"]}
        >
          <Image
            src="/img/img_example-omochi2.jpeg"
            width={128}
            height={96}
            alt="ごはんイメージ"
            className={styles.review__img}
          />
        </button>
        <button
          onClick={() => {
            toggleModal("/img/img_example-omochi3.jpeg");
          }}
          className={styles["review__img-wrapper"]}
        >
          <Image
            src="/img/img_example-omochi3.jpeg"
            width={128}
            height={96}
            alt="ごはんイメージ"
            className={styles.review__img}
          />
        </button>
      </div>
      <p className={styles.review__body}>
        お店の雰囲気がよく、ご飯も美味しく、さらにリーズナブルで最高でした。また行きたいです〜
      </p>
      {isOpen ? (
        <Modal>
          <div className={styles["review__modal-container"]}>
            <Image
              src={openImg}
              width={345}
              height={345}
              alt="ごはんイメージ"
              className={styles["review__modal-img"]}
            />
            <button
              className={styles["review__modal-close"]}
              onClick={() => {
                toggleModal(openImg);
              }}
            >
              <Image
                src={"/img/icon_close.png"}
                width={30}
                height={30}
                alt="とじる"
              />
            </button>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Review;
