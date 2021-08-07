import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [];

  for (let i = 0; i < 12; i++) {
    let monthObject = new Date(2020, i, 12);
    let generatedDateObject = {
      label: monthObject.toLocaleString("en-us", {
        month: "short",
      }),
      value: 0,
    };
    chartDataPoints[i] = generatedDateObject;
  }

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
