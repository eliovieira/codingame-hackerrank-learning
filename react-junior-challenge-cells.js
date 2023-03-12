import "./App.css";
import { useState } from "react";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);
  const word = cells.join("");

  function handleEdit(value, index) {
    let arr = [...cells];
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i] = value;
      }
    }
    console.log(arr);
    setCells(arr);
  }

  function handleAdd(index) {
    const left = cells.slice(0, index + 1);
    const right = cells.slice(index + 1);
    const arr = [...left, "_", ...right];
    setCells(arr);
  }

  return (
    <div className="App">
      <div className="row">
        {cells &&
          cells.map((letter, index) => {
            return (
              <div key={index} className="cell">
                <input
                  onChange={(e) => {
                    handleEdit(e.target.value, index);
                  }}
                  value={letter}
                  onClick={(e) => {
                    e.target.value = "";
                  }}
                />
                {index < cells.length - 1 && (
                  <span
                    className="hidden"
                    onClick={() => {
                      handleAdd(index);
                    }}
                  >
                    &nbsp;
                  </span>
                )}
              </div>
            );
          })}
      </div>
      <span className="word">{word}</span>
    </div>
  );
}

export default App;
