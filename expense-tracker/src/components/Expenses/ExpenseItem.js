import React from "react";
//Import ExpenseItem.css to use its css classes
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//A component in react is just a JavaScript function
//You can only have 1 root element per return statement or per jsx code snippet
/* This is not allowed!
return <div>Date</div>
    <div><h2>Title</h2><div>Amount</div>
    </div>
    You can enclose it all in a single div
*/
//props (properties) (attributes)
function ExpenseItem(props) {
  //regular javascript
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

//To use a component we need to export it (Use App.js)
export default ExpenseItem;
