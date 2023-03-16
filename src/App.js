import "./App.css";
import Cocktail from "./components/Cocktail";
import DadJoke from "./components/DadJoke";
import Fact from "./components/Fact";
import Giphy from "./components/Giphy";
import Game1 from "./components/Game1";
import Movie from "./components/movie";
import Email from "./Email";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sliderify } from "react-sliderify";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Evening Entertainment!</h2>
        <div id="slider">
          <Sliderify>
            <div>
              <Giphy />
            </div>
            <div>
              <Game1 />
            </div>
            <div>
              <Movie />
            </div>
            <div>
              <Fact />
            </div>
            <div>
              <DadJoke />
            </div>
            <div>
              <Cocktail />
            </div>
            <div>
              <Email />
            </div>
          </Sliderify>
        </div>
      </header>
    </div>
  );
}

export default App;
