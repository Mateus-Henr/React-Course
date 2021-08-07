import Card from "./Card";
import Button from "./Button";
import styles from "./CSS/ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.modalTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.modalMessage}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
