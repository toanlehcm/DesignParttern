import logo from './logo.svg';
import './App.css';
import StrategyWithoutPattern from './lesson/StrategyPattern/StrategyWithoutPattern';
import StrategyWithPattern from './lesson/StrategyPattern/StrategyWithPattern';

function App() {
  return (
    <div className="App">
      <StrategyWithoutPattern />
      <StrategyWithPattern />
    </div>
  );
}

export default App;
