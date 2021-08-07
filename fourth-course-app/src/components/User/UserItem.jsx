const UserItem = (props) => {
  const onDeleteUserHandler = () => {
    return props.onDelete(props.id);
  };

  return (
    <li onClick={onDeleteUserHandler}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default UserItem;
