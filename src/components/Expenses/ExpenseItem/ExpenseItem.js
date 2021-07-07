import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

const ExpenseItem = (props) => {
  const [form, setForm] = useState([
    { type: "text", name: "title", value: props.title },
    { type: "number", name: "age", value: 2 },
  ]);

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  /*  const changeTitleHandler = () => {
    setTitle("Updated");
    console.log("title", title);
  }; */

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    let updatedForm = [...form];
    let valueToUpdate = form.find((input) => input.name === name);
    valueToUpdate.value = e.target.value;
    setForm(updatedForm);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} year={year} day={day} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
      </div>{" "}
      <div className="expense-item__price">£{props.amount.toFixed(2)}</div>
      {/* <button onClick={changeTitleHandler}>Change Title</button> */}
      {/* <input onChange={(e) => inputChangeHandler(e)} value={title}></input> */}
      {form.map((element) => {
        return (
          <input
            type={element.type}
            name={element.name}
            value={element.value}
            onChange={(e) => inputChangeHandler(e)}
          ></input>
        );
      })}
    </Card>
  );
};

export default ExpenseItem;
