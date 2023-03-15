import "./App.css";
import Cocktail from "./components/Cocktail";
import DadJoke from "./components/DadJoke";
import Fact from "./components/Fact";
import Giphy from "./components/Giphy";
import Game1 from "./components/Game1"
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <h2 className="title">Evening Entertainment!</h2>
        <div className="one-line">
          <div className="one-col">
          <h1 className="card-title">Cocktail recipe:</h1>
            <Cocktail />
          </div>
          <div className="one-col">
            <h1 className="card-title">Fact:</h1>
            <Fact />
          </div>
        </div>

        <div className="one-line">
          <div className="one-col">
          <h1 className="card-title">Dad Joke:</h1>
            <DadJoke />
          </div>
          <div className="one-col">
          <h1 className="card-title">GIF:</h1>
            <Giphy />
          </div>
        </div>

        <div className="one-line">
          <div className="one-col">
            <Game1 />
          </div>
          <div className="one-col">
           <p>NPM MODULE/LIBRARY</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
