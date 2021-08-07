import { useState } from "react";
import styles from "./CSS/UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Values",
        message: "Please fill out all the boxes.",
      });
      return;
    }

    if (+enteredAge > 120) {
      setError({
        title: "Invalid Age",
        message: "Please select an age between 18 and 120 years old.",
      });
      return;
    }

    if (+enteredAge < 18) {
      setError({
        title: "Invalid Age",
        message: "You must be over 18 to add a user.",
      });
      return;
    }

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.exportUser(newUser);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          modalTitle={error.title}
          modalMessage={error.message}
          onClick={() => setError()}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={(event) =>
              event.target.value.trim().length > 0 &&
              setEnteredUsername(event.target.value)
            }
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            min="0"
            onChange={(event) =>
              event.target.value.trim().length > 0 &&
              setEnteredAge(event.target.value)
            }
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
