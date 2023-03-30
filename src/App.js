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
import Cook from "./components/cook"


// import Intro from "./components/intro";
// import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="jumbotron">
          <div className="title"><h1 style={{ fontSize: "70px" }}>Evening Entertainment</h1>

            <p className="subtitle" style={{ fontSize: "20px", color: "orange", textShadow: 'none'}}>
              A place for all your evening entertainment
            </p>

          </div>
        </div>


        <div id="slider" style={{height: '700px', width:'1200px'}}>
          <Sliderify  slideDurationInSecs="250" stopOnCurrent={true}>
            <div>
              <Party />
            </div>
            <div>
              <Fact />
            </div>
            <div>
              <Cook />
            </div>
            <div>
              <Cocktail />
            </div>
            <div>
              <Movie />
            </div>
            <div>
              <Game1 />
            </div>
            <div>
              <Video />
            </div>
            <div>
              <DadJoke />
            </div>
            <div>
              <Giphy />
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
