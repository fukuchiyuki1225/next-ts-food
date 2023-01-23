import styles from "../../styles/writeReview/index.module.scss";
import completionReview from "../../styles/writeReview/completion.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const CompletionReview = (props) => {
  const router = useRouter();

  return (
    <div className={completionReview["completion-review"]}>
      <div className="item-box">
        <div className="basic-inner">
          <h2 className={completionReview["completion-review__title"]}>
            投稿しました！
          </h2>
        </div>
      </div>
      <button
        className={`orange-button basic-inner ${styles["write-review__button"]}`}
        onClick={() => {
          router.push({
            pathname: `/shops/${props.id}`,
            query: {
              id: props.id,
            },
          });
        }}
      >
        <span className={`orange-button__text`}>お店のページにもどる</span>
      </button>
    </div>
  );
};

export const getServerSideProps = (context) => {
  return {
    props: {
      id: context.query.id,
      backTo: "",
    },
  };
};

export default CompletionReview;
