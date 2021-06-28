import React from "react";
//card container component
//which should act as a shell around
//either our ExpenseItem content or our ExpenseList content.
import "./Card.css";
const Card = (props) => {
  //To add all the css classes 'card ' + props.className
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  //children is everything between <Card> </Card> in the other components
}

export default Card;
