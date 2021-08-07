import { useState } from "react";
import AutoGenerateExpenses from "./components/Expenses/AutoGenerateExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/CSS/Expenses.css";

const staticExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 4, 20),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(staticExpenses);

  const autoGeneratedExpenses = (expensesArray) => {
    setExpenses(expensesArray);
  };

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <AutoGenerateExpenses generatedExpenses={autoGeneratedExpenses} />
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
