import { act } from "react-dom/test-utils";

const initialState = {
  count: 0,
  id: "",
  password: "",
};

function Reducer(state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case "INCREAMENT":
      return { ...state, count: state.count + payload.num };
    case "DECREASEMENT":
      return { ...state, count: state.count - payload.num };
    case "LOGIN":
      return { ...state, id: payload.id, password: payload.password };
    default:
      return { ...state };
  }
}

export default Reducer;
