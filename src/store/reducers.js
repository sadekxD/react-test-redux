const initialState = {
  counter: 0,
};

export const couterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dec":
      return { counter: state.counter - 1 };
    case "inc":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};
