import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /*
    props {
        date: '',
        title: '',
        amount: '',
    } 
    */
  console.log(props);
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>{" "}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>{" "}
      <div className="expense-item__price">£{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
