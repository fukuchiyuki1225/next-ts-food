import styles from "../styles/WriteReview.module.scss";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

const WriteReview = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      star: "1",
      title: "",
      username: "ユーザー名",
      food: "",
      date: "",
      image: "",
    },
  });
  const onSubmit = (d) => {
    console.log(d);
  };

  return (
    <div className={styles["write-review"]}>
      <div className="item-box">
        <div className="basic-inner">
          <h2 className={styles["write-review__title"]}>
            {props.name}
            <br />
            のごはんの感想を書く！
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["write-review__form"]}
          >
            <div className={styles["write-review__item"]}>
              <lebel className={styles["write-review__label"]}>星</lebel>
              <div className="star-container">
                <input
                  id="star1"
                  type="radio"
                  name="star"
                  value="1"
                  className={styles["write-review__star-input"]}
                  checked
                  onChange={() => {
                    console.log("change");
                  }}
                />
                <label htmlFor="star1" className={styles["write-review__star"]}>
                  <Image
                    src="/img/icon_filled-star.png"
                    width={32}
                    height={32}
                    alt="星"
                    className="star"
                  />
                </label>
                <input
                  id="star2"
                  type="radio"
                  name="star"
                  value="2"
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star2" className={styles["write-review__star"]}>
                  <Image
                    src="/img/icon_star.png"
                    width={32}
                    height={32}
                    alt="星"
                    className="star"
                  />
                </label>
                <input
                  id="star3"
                  type="radio"
                  name="star"
                  value="3"
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star3" className={styles["write-review__star"]}>
                  <Image
                    src="/img/icon_star.png"
                    width={32}
                    height={32}
                    alt="星"
                    className="star"
                  />
                </label>
                <input
                  id="star4"
                  type="radio"
                  name="star"
                  value="4"
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star4" className={styles["write-review__star"]}>
                  <Image
                    src="/img/icon_star.png"
                    width={32}
                    height={32}
                    alt="星"
                    className="star"
                  />
                </label>
                <input
                  id="star5"
                  type="radio"
                  name="star"
                  value="5"
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star5" className={styles["write-review__star"]}>
                  <Image
                    src="/img/icon_star.png"
                    width={32}
                    height={32}
                    alt="星"
                    className="star"
                  />
                </label>
              </div>
            </div>
            <div className={styles["write-review__item"]}>
              <lebel htmlFor="title" className={styles["write-review__label"]}>
                タイトル
              </lebel>
              <input
                id="title"
                type="text"
                name="title"
                value=""
                placeholder="感想をひとことで！"
                className={styles["write-review__input--title"]}
                onChange={() => {
                  console.log("change");
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <lebel className={styles["write-review__label"]}>投稿者名</lebel>
              <input
                id="username"
                type="radio"
                name="name"
                value="ユーザー名"
                className={styles["write-review__input--username"]}
                onChange={() => {
                  console.log("change");
                }}
                checked
              />
              <label
                htmlFor="username"
                className={styles["write-review__label--username"]}
              >
                ユーザー名
              </label>
              <input
                id="anonymous"
                type="radio"
                name="name"
                value="匿名"
                className={styles["write-review__input--username"]}
              />
              <label
                htmlFor="anonymous"
                className={styles["write-review__label--username"]}
              >
                匿名
              </label>
            </div>
            <div className={styles["write-review__item"]}>
              <lebel htmlFor="food" className={styles["write-review__label"]}>
                食べたごはん
              </lebel>
              <input
                id="food"
                type="text"
                name="food"
                value=""
                placeholder="何を食べましたか？"
                className={styles["write-review__input--food"]}
                onChange={() => {
                  console.log("change");
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <lebel htmlFor="date" className={styles["write-review__label"]}>
                食べた日
              </lebel>
              <input
                id="date"
                type="date"
                name="date"
                value=""
                className={styles["write-review__input"]}
                onChange={() => {
                  console.log("change");
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <lebel htmlFor="image" className={styles["write-review__label"]}>
                写真
              </lebel>
              <input
                id="image"
                type="file"
                name="image"
                value=""
                accept="image/jpeg, image/jpg, image/png"
                className={styles["write-review__input"]}
                onChange={() => {
                  console.log("change");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.query.id,
      name: context.query.name,
      backTo: `/shops/${context.query.id}`,
    },
  };
};

export default WriteReview;
