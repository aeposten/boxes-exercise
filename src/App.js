import { useState } from 'react';
import boxes from './boxes';
import Box from './components/Box';

function App() {
  const [squares, setSquares] = useState(boxes)
  return (
    <div className="App">
      {squares.map((box) => 
        <Box key={box.id} on={box.on}/>
      )}
    </div>
  );
}

export default App;
