import "./App.css";
import Cocktail from "./components/Cocktail";
import DadJoke from "./components/DadJoke";
import Fact from "./components/Fact";
import Giphy from "./components/Giphy";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <h2 className="title">Evening Entertainment!</h2>
        <div className="one-line">
          <div className="one-col">
            <Cocktail />
          </div>
          <div className="one-col">
            <Fact />
          </div>
        </div>

        <div className="one-line">
          <div className="one-col">
            <DadJoke />
          </div>
          <div className="one-col">
            <Giphy />
          </div>
        </div>

        <div className="one-line">
          <div className="one-col">
            <p>NPM MODULE/LIBRARY</p>
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
