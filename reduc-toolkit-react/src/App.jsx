import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/createSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
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
        </p>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
