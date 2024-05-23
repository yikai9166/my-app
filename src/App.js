import './App.css';
import MyRGBPanel from './components/RGBPanel/MyRGBPanel';
import MyCalculator from './components/calculator/MyCalculator';
import Board from './components/tic-tac-toe/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React !!! 4B0G0112鄭凱翊</h1>
        <h2>RGBPanel</h2>
        <MyRGBPanel />
        <h2>Calculator</h2>
        <MyCalculator />
        <h2>Tic-Tac-Toe Game</h2>
        <Square />
        
      </header>
    </div>
  );
}

export default App;