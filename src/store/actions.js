export const increment = () => (dispatch) => {
  dispatch({ type: "inc" });
};

export const decrement = () => (dispatch) => {
  dispatch({ type: "dec" });
};
