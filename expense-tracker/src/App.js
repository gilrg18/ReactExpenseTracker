//To use our ExpenseItem REACT component in the components folder
import ExpenseItem from "./components/ExpenseItem";
//1 file per component
//App will be my ROOT component
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
