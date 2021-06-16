import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
      <ExpenseDate month={month} year={year} day={day} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>{" "}
      <div className="expense-item__price">£{props.amount.toFixed(2)}</div>
    </Card>
  );
};

export default ExpenseItem;
