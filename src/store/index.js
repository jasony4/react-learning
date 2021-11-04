import { createStore } from "redux";

const initialState = {
  expenses: [
    { date: new Date(2021, 2, 20), title: "Desk", amount: 75.99, id: "e1" },
    {
      date: new Date(2021, 2, 11),
      title: "Breakfast",
      amount: 10.99,
      id: "e2",
    },
    {
      date: new Date(2021, 4, 23),
      title: "Not coffee",
      amount: 2.36,
      id: "e3",
    },
    { date: new Date(2021, 5, 10), title: "Alcohol", amount: 250.5, id: "e4" },
  ],
  test: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        test: true,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
