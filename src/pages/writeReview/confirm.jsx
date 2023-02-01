import styles from "../../styles/writeReview/index.module.scss";
import confirmStyles from "../../styles/writeReview/confirm.module.scss";
import { useRouter } from "next/router";

const ConfirmReview = (props) => {
  const filledStarClassName = `${styles["write-review__star"]} ${styles["write-review__star--filled"]}`;
  const starClassName = `${styles["write-review__star"]}`;
  const starClass = [];
  const router = useRouter();

  for (let i = 1; i <= 5; i++) {
    if (i <= props.star) {
      starClass.push(filledStarClassName);
    } else {
      starClass.push(starClassName);
    }
  }

  return (
    <div className={confirmStyles["confirm-review"]}>
      <div className="item-box">
        <div className="item-box__inner">
          <div className={`${confirmStyles["confirm-review"]} basic-inner`}>
            <h2 className={confirmStyles["confirm-review__title"]}>
              入力内容の確認
            </h2>
            <dl className={confirmStyles["confirm-review__dl"]}>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>星</dt>
                <dd className="star-container">
                  {starClass.map((name, index) => {
                    return <div key={index} className={name}></div>;
                  })}
                </dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>タイトル</dt>
                <dd className={styles["write-review__input"]}>{props.title}</dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>表示名</dt>
                <dd className={styles["write-review__input"]}>{props.name}</dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>食べたごはん</dt>
                <dd className={styles["write-review__input"]}>{props.food}</dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>日付</dt>
                <dd className={styles["write-review__input"]}>{props.date}</dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>写真</dt>
                <dd className={styles["write-review__input"]}>{props.image}</dd>
              </div>
              <div className={styles["write-review__item"]}>
                <dt className={styles["write-review__label"]}>ごはんの感想</dt>
                <dd className={styles["write-review__input"]}>
                  {props.textarea}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <button
        className={`orange-button basic-inner ${styles["write-review__button"]}`}
        onClick={() => {
          router.push({
            pathname: `completion`,
            query: {
              id: props.id,
            },
          });
        }}
      >
        <span className={`orange-button__text`}>投稿</span>
      </button>
      <button
        className={`white-button basic-inner ${styles["write-review__button"]}`}
        onClick={() => {
          router.push(
            {
              pathname: "/writeReview/",
              query: {
                id: props.id,
                shopName: props.shopName,
                star: props.star,
                title: props.title,
                name: props.name,
                food: props.food,
                date: props.date,
                image: props.image,
                textarea: props.textarea,
              },
            },
            "/writeReview/"
          );
        }}
      >
        <span className={`white-button__text`}>もどる</span>
      </button>
    </div>
  );
};

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.query.id,
      shopName: context.query.shopName,
      star: context.query.star,
      title: context.query.title,
      name: context.query.name,
      food: context.query.food,
      date: context.query.date,
      image: context.query.image,
      textarea: context.query.textarea,
      backTo: "",
    },
  };
};

export default ConfirmReview;
