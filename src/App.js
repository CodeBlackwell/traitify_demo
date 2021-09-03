import logo from './logo.svg';
import './App.css';
import TraitifyAssessment from './traitify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <TraitifyAssessment/>
      </body>
    </div>
  );
}

export default App;
