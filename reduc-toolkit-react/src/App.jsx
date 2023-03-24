import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/createSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  console.log("🚀 ~ file: App.js:7 ~ App ~ count:", count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        redux
        <p>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              incrementByAmount(10);
            }}
          >
            Increment By Amount
          </button>
        </p>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
