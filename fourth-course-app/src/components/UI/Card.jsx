import styles from "./CSS/Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
