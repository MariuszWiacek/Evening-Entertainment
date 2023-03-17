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
// import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="jumbotron">
      <div  className="title"><h1>Evening Entertainment!</h1>
  
  <p style={{ fontSize: "30px", color: "orange" }}>
          Place where you can find range of activities to enjoy your evening
  </p>
  
</div>
</div>
     
        
        
        <div id="slider">
          <Sliderify slideDurationInSecs="25">
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
              <Party />
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
