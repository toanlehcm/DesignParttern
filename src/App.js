import './App.css';
import FactoryMethodPattern from './lesson/FactoryPattern/FactoryMethodPattern';
import SimpleFactoryPattern from './lesson/FactoryPattern/SimpleFactoryPattern';

function App() {
  return (
    <div className="App">
      <SimpleFactoryPattern />
      <FactoryMethodPattern />
    </div>
  );
}

export default App;
