import styles from "./index.module.scss";

const Filter = (props) => {
  console.log(props.openFilter);
  return (
    <div
      className={
        props.openFilter
          ? `${styles.filter} ${styles["filter--active"]}`
          : `${styles.filter}`
      }
    >
      <div className={styles.filter__container}>
        <div className="basic-inner">filter</div>
      </div>
    </div>
  );
};

export default Filter;
