import boxes from './boxes';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      {boxes.map((box) => 
        <Box />
      )}
    </div>
  );
}

export default App;
