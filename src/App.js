import logo from './logo.svg';
import './App.css';
import Coloumns from './component/Coloumns';


function App() {
  return (
    <div className="App">
      <Coloumns state={'planned'}/> 
      <Coloumns state={'ongoing'}/> 
      <Coloumns state={'done'}/> 

    
    </div>
  );
}

export default App;
