import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import "./components/Expenses/Expenses.css";
import Card from "./components/Card/Card";

function App() {
  const expenses = [
    { date: new Date(2021, 2, 20), title: "Desk", amount: 75.99 },
    { date: new Date(2021, 2, 11), title: "Breakfast", amount: 10.99 },
    { date: new Date(2021, 4, 23), title: "Coffee", amount: 2.36 },
    { date: new Date(2021, 5, 10), title: "Alcohol", amount: 250.5 },
  ];

  const mappedExpenses = expenses.map((expense, idx) => (
    <ExpenseItem
      key={idx}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  return (
    <div>
      <h1>Let's get started</h1>
      <Card className="expenses">{mappedExpenses}</Card>
    </div>
  );
}

export default App;
