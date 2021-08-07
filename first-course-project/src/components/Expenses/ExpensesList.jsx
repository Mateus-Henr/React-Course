import "./CSS/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses;

  if (filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
