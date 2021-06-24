//To use our ExpenseItem REACT component in the components folder
import ExpenseList from "./components/ExpenseList";

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
      <ExpenseList expenseList={expenses} />
    </div>
  );
}

export default App;
