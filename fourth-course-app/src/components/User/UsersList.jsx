import Card from "../UI/Card";
import UserItem from "./UserItem";
import styles from "./CSS/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={props.users.length > 0 ? styles.users : styles.card}>
      {props.users.length === 0 && (
        <div className={styles.noValues}>No values here.</div>
      )}
      <ul>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            username={user.username}
            age={user.age}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
