import React from "react";
//To use our ExpenseItem REACT component in the components folder
import ExpenseList from "./components/Expenses/ExpenseList";

//1 file per component
//App will be my ROOT component
function App() {
  //props (properties)
  const expenses = [
    {
      id: "e1",
      title: "Puro Pollo",
      amount: 124.5,
      date: new Date(2021, 5, 24),
    },
    {
      id: "e2",
      title: "Despensa",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Cable Hdmi",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Cinepolis",
      amount: 450.43,
      date: new Date(2021, 1, 8),
    },
  ];
  //3 parameters
  //1 element that will be created
  //2 object that configures the first element
  //3 content between the first element div tags
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Expense Tracker"),
    React.createElement(ExpenseList, {expenseList: expenses})
  );

  // return (
  //   <div>
  //     <h2>Expense Tracker</h2>
  //     <ExpenseList expenseList={expenses} />
  //   </div>
  // );
}

export default App;
