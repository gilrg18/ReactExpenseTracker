//To use our ExpenseItem REACT component in the components folder
import ExpenseItem from "./components/ExpenseItem";
//1 file per component
//App will be my ROOT component
function App() {
  //props (properties)
  const expenses = [
    {
      id: "e1",
      title: "Puro Pollo",
      amount: 124.50,
      date: new Date(2021, 5, 24),
    },
    { id: "e2", title: "Despensa", amount: 799.49, date: new Date(2021, 2, 12) },
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
