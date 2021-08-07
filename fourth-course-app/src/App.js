import { useState } from "react";
import UserInput from "./components/User/UserInput";
import UsersList from "./components/User/UsersList";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Mateus",
      age: 18,
    },
    {
      id: 2,
      username: "Random",
      age: 18,
    },
    {
      id: 3,
      username: "Lucas",
      age: 18,
    },
  ]);

  const deleteUser = (deletedUserId) => {
    return setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };

  const importUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: Math.random().toString(), ...user }];
    });
  };

  return (
    <div>
      <UserInput exportUser={importUser} />
      <UsersList users={users} onDelete={deleteUser} />
    </div>
  );
};

export default App;
