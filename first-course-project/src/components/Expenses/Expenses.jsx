import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const defaultFilterValue = "Select";
  const [filteredYear, setFilteredYear] = useState(defaultFilterValue);

  const expensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (filteredYear !== defaultFilterValue)
      return expense.date.getFullYear().toString() === filteredYear;

    return expense;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeExpensesFilter={expensesFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
