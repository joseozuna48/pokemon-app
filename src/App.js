import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="pokeball">
          <div id="top" ></div>
          <button id="center" onClick={ () =>console.log("Quivole Verga")}></button>
          <div id="bottom"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
