import styles from "./index.module.scss";

const Filter = (props) => {
  const genre = props.genre;

  return (
    <div
      className={
        props.openFilter
          ? `${styles.filter} ${styles["filter--active"]}`
          : `${styles.filter}`
      }
    >
      <div className={styles.filter__container}>
        <div className="basic-inner">
          <h3 className={styles.filter__heading}>ジャンル選択</h3>
          <ul className={styles.filter__list}>
            {genre.map((value) => {
              return <li key={value.code}>{value.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
