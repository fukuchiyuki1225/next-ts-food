import styles from "./index.module.scss";

const Modal = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>{children}</div>
    </div>
  );
};

export default Modal;
