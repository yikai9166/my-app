import MySlider from './MySlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!!!</h1>
        <h2>第1個元件</h2>
        <MySlider color = "RED"/>
        <MySlider color = "GREEN"/>
        <MySlider color = "BLUE"/>
      </header>
    </div>
  );
}

export default App;
