import styles from "../../styles/writeReview/index.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const WriteReview = (props) => {
  const [star, setStar] = useState("1");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("username");
  const [food, setFood] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [textarea, setTextarea] = useState("");
  const [msg, setMsg] = useState([]);

  const filledStarClassName = `${styles["write-review__star"]} ${styles["write-review__star--filled"]}`;
  const starClassName = `${styles["write-review__star"]}`;

  const [starClass, setStarClass] = useState([
    filledStarClassName,
    starClassName,
    starClassName,
    starClassName,
    starClassName,
  ]);

  const router = useRouter();

  const onSubmit = () => {
    console.log("submit");
  };

  const onChangeStar = (newStar) => {
    setStar(newStar);
    const newStarClass = [];
    for (let i = 1; i <= starClass.length; i++) {
      if (i <= newStar) {
        newStarClass.push(filledStarClassName);
      } else {
        newStarClass.push(starClassName);
      }
    }
    setStarClass(newStarClass);
  };

  const validate = () => {
    let msg = [];
    if (title.length === 0) {
      msg.push("タイトルを入力してください");
    }
    if (food.length === 0) {
      msg.push("食べたごはんを入力してください");
    }
    console.log(textarea.length);
    if (textarea.length === 0) {
      msg.push("ごはんの感想を入力してください");
    }

    if (msg.length === 0) {
      return true;
    } else {
      setMsg(msg);
      return false;
    }
  };

  useEffect(() => {
    if (props.star !== "") onChangeStar(props.star);
    if (props.title !== "") setTitle(props.title);
    if (props.name !== "") setName(props.name);
    if (props.food !== "") setFood(props.food);
    if (props.date !== "") setDate(props.date);
    if (props.image !== "") setImage(props.image);
    if (props.textarea !== "") setTextarea(props.textarea);
  }, []);

  return (
    <div className={styles["write-review"]}>
      <div className="item-box">
        <div className="basic-inner">
          <h2 className={styles["write-review__title"]}>
            {props.shopName}
            <br />
            のごはんの感想を書く！
          </h2>
          <form
            onSubmit={() => {
              onSubmit();
            }}
            className={styles["write-review__form"]}
          >
            {msg.length !== 0 ? (
              <div className={styles["write-review__msg-container"]}>
                {msg.map((value, index) => {
                  return (
                    <div key={index} className={styles["write-review__msg"]}>
                      {value}
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <div className={styles["write-review__item"]}>
              <p className={styles["write-review__label"]}>星</p>
              <div className="star-container">
                <input
                  id="star1"
                  type="radio"
                  name="star"
                  value="1"
                  onChange={(e) => {
                    onChangeStar(e.target.value);
                  }}
                  defaultChecked={true}
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star1" className={starClass[0]}></label>
                <input
                  id="star2"
                  type="radio"
                  name="star"
                  value="2"
                  onChange={(e) => {
                    onChangeStar(e.target.value);
                  }}
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star2" className={starClass[1]}></label>
                <input
                  id="star3"
                  type="radio"
                  name="star"
                  value="3"
                  onChange={(e) => {
                    onChangeStar(e.target.value);
                  }}
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star3" className={starClass[2]}></label>
                <input
                  id="star4"
                  type="radio"
                  name="star"
                  value="4"
                  onChange={(e) => {
                    onChangeStar(e.target.value);
                  }}
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star4" className={starClass[3]}></label>
                <input
                  id="star5"
                  type="radio"
                  name="star"
                  value="5"
                  onChange={(e) => {
                    onChangeStar(e.target.value);
                  }}
                  className={styles["write-review__star-input"]}
                />
                <label htmlFor="star5" className={starClass[4]}></label>
              </div>
            </div>
            <div className={styles["write-review__item"]}>
              <label htmlFor="title" className={styles["write-review__label"]}>
                タイトル
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                placeholder="感想をひとことで！"
                className={styles["write-review__input--title"]}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <p className={styles["write-review__label"]}>投稿者名</p>
              <input
                id="username"
                type="radio"
                name="name"
                value="username"
                defaultChecked={true}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles["write-review__input--username"]}
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
              <label htmlFor="food" className={styles["write-review__label"]}>
                食べたごはん
              </label>
              <input
                id="food"
                type="text"
                name="food"
                value={food}
                placeholder="何を食べましたか？"
                className={styles["write-review__input--food"]}
                onChange={(e) => {
                  setFood(e.target.value);
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <label htmlFor="date" className={styles["write-review__label"]}>
                食べた日
              </label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                className={styles["write-review__input"]}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className={styles["write-review__item"]}>
              <label htmlFor="image" className={styles["write-review__label"]}>
                写真
              </label>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/jpeg, image/jpg, image/png"
                className={styles["write-review__input"]}
                onChange={(e) => {
                  setImage(e.target.files);
                }}
                multiple
              />
            </div>
            <div className={styles["write-review__item"]}>
              <label
                htmlFor="textarea"
                className={styles["write-review__label"]}
              >
                ごはんの感想
              </label>
              <textarea
                id="textarea"
                name="textarea"
                className={styles["write-review__input--textarea"]}
                value={textarea}
                onChange={(e) => {
                  setTextarea(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <button
        className={`orange-button basic-inner ${styles["write-review__button"]}`}
        type="submit"
        onClick={() => {
          if (!validate()) return;
          router.push(
            {
              pathname: "/writeReview/confirm/",
              query: {
                id: props.id,
                shopName: props.shopName,
                star: star,
                title: title,
                name: name,
                food: food,
                date: date,
                image: image,
                textarea: textarea,
              },
            },
            "/writeReview/confirm/"
          );
        }}
      >
        <span className={`orange-button__text`}>入力内容を確認</span>
      </button>
    </div>
  );
};

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.query.id,
      shopName: context.query.shopName,
      name: context.query.name,
      star: context.query.star,
      title: context.query.title,
      name: context.query.name,
      food: context.query.food,
      date: context.query.date,
      image: context.query.image,
      textarea: context.query.textarea,
      backTo: `/shops/${context.query.id}`,
    },
  };
};

export default WriteReview;
