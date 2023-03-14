import "./App.css";
import Cocktail from "./components/Cocktail";
import DadJoke from "./components/DadJoke";
import Fact from "./components/Fact";
import Giphy from "./components/Giphy";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Cocktail />
          <Fact />
        </div>

        <div>
          <DadJoke />
          <Giphy />
        </div>
      </header>
    </div>
  );
}

export default App;
