import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  const calTotal = () => {
    setTotal(num1 + num2);
  };

  return (
    <div className="App">
      <h1>Add Two Numbers</h1>
      <div>
        <input type="number" onChange={(e) => setNum1(+e.target.value)} />
        <input type="number" onChange={(e) => setNum2(+e.target.value)} />
      </div>
      <div>
        <input type="button" value="ADD" onClick={calTotal} />
        <h2>Result is :{total} </h2>
      </div>
    </div>
  );
}
