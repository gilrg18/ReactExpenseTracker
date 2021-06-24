//Import ExpenseItem.css to use its css classes
import './ExpenseItem.css';
//A component in react is just a JavaScript function
//You can only have 1 root element per return statement or per jsx code snippet
/* This is not allowed!
return <div>Date</div>
    <div><h2>Title</h2><div>Amount</div>
    </div>
    You can enclose it all in a single div
*/
function ExpenseItem(){
    //regular javascript date 2021 june 24
    const expenseDate = new Date(2021, 5, 24);
    const expenseTitle = 'Puro Pollo';
    const expenseAmount = 120.25;
    return (
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    );
}

//To use a component we need to export it (Use App.js)
export default ExpenseItem;