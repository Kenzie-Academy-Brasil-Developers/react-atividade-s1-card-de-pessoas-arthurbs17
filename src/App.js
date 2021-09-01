import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <h1>Futuros Devs Kenzie</h1>
      <div className="App-main">
        <Developer name="Gabriel" age="19" country="Brasil" />
        <Developer name="Arthur" age="28" country="Brasil" />
        <Developer name="Mariana" age="24" country="Itália" />
      </div>
    </div>
  );
}

export default App;
