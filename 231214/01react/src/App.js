import "./App.css";
import Box from "./Box";
// 액션의 값을 전달하는 애: useDispatch
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const Increase = () => {
    dispatch({ type: "INCREAMENT", payload: { num: 1 } });
  };
  const Login = () => {
    dispatch({ type: "LOGIN", payload: { id: "adam", password: "123" } });
  };
  const Decrease = () => {
    dispatch({ type: "DECREASEMENT", payload: { num: 1 } });
  };
  return (
    <div className="App">
      <h1>
        {id} {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={Increase}>증가</button>
      <button onClick={Login}>Login</button>
      <button onClick={Decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
