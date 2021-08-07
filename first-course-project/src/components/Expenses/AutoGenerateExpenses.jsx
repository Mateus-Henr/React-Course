const expensesQuantity = 10;

const autoGeneratedExpenses = [];

const randomTitles = [
  "Alcohol",
  "Fruit/veg/salads",
  "Dairy",
  "Chilled convenience",
  "Bathroom toiletries",
  "Household/cleaning",
  "Fresh meat",
  "Frozen prepared foods",
  "Ambient bakery",
  "Soft drinks",
  "Confectionery",
  "Fresh Poultry/game",
  "Biscuits",
  "Canned goods",
  "Petcare",
  "Savoury home cooking",
  "Savouries",
  "Hot beverages",
  "Packet cereal",
  "Healthcare",
  "",
];

const generateRandomExpenses = () => {
  for (let i = 0; i < expensesQuantity; i++) {
    let randomTitleNumber = Math.floor(
      Math.random() * (randomTitles.length - 1)
    );
    let randomAmount = Math.floor(Math.random() * 1000 + 10);

    autoGeneratedExpenses[i] = {
      id: "f" + i,
      title: randomTitles[randomTitleNumber],
      amount: randomAmount,
      date: randomDate(new Date(2019, 1, 2), new Date(2022, 12, 30)),
    };
  }
};

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const AutoGenerateExpenses = (props) => {
  generateRandomExpenses();
  props.generatedExpenses(autoGeneratedExpenses);
  return null;
};

export default AutoGenerateExpenses;

// Pure JSX Used in App.js
// import React from "react";

// return React.createElement(
// 'div',
// {},
// React.createElement('h2', {}, "Let's get started!"),
// React.createElement(Expenses, {items: expenses})
// );
