import { useState } from "react";
import boxes from "./boxes";
import Box from "./components/Box";

function App() {
  const [squares, setSquares] = useState(boxes);

  function toggleOn(boxId) {
    setSquares((prevState) => {
      return prevState.map((box) => {
        return box.id === boxId ? { ...box, on: !box.on } : box;
      });
    });
  }

  return (
    <div className="App">
      {squares.map((box) => (
        <Box
          key={box.id}
          toggleOn={() => toggleOn(box.id)}
          boxId={box.id}
          on={box.on}
        />
      ))}
    </div>
  );
}

export default App;
