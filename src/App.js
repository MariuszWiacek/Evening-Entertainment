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
import Party from "./components/party";
import Video from "./components/video";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Evening Entertainment!</h2>
        <p style={{ fontSize: "20px", color: "orange" }}>
          Place where you can find range of activities to enjoy your evening
        </p>
        <div id="slider">
          <Sliderify slideDurationInSecs="25">
            <div>
              <Giphy />
            </div>
            <div>
              <Video />
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
              <Party />
            </div>
          </Sliderify>
        </div>
        <div className="one-line">
          <div className="one-col">
            <Email />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
