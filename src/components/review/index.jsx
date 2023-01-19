import styles from "./index.module.scss";
import Image from "next/image";

const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles["review__top-container"]}>
        <div className={styles["review__left-contents"]}>
          <div className={styles["review__star-container"]}>
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className={styles.review__star}
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className={styles.review__star}
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className={styles.review__star}
            />
            <Image
              src="/img/icon_filled-star.png"
              width={32}
              height={32}
              alt="星"
              className={styles.review__star}
            />
            <Image
              src="/img/icon_star.png"
              width={32}
              height={32}
              alt="星"
              className={styles.review__star}
            />
          </div>
          <h3 className={styles.review__title}>おいしかった〜</h3>
        </div>
        <dl className={styles.review__dl}>
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
        <div className={styles["review__img-wrapper"]}>
          <Image
            src="/img/img_example-omochi.jpeg"
            width={345}
            height={345}
            alt
            className={styles.review__img}
          />
        </div>
        <div className={styles["review__img-wrapper"]}>
          <Image
            src="/img/img_example-omochi2.jpeg"
            width={345}
            height={345}
            alt
            className={styles.review__img}
          />
        </div>
        <div className={styles["review__img-wrapper"]}>
          <Image
            src="/img/img_example-omochi3.jpeg"
            width={345}
            height={345}
            alt
            className={styles.review__img}
          />
        </div>
      </div>
      <p className={styles.review__body}>
        お店の雰囲気がよく、ご飯も美味しく、さらにリーズナブルで最高でした。また行きたいです〜
      </p>
    </div>
  );
};

export default Review;
