import "./App.css";
import Cocktail from "./components/Cocktail";
import DadJoke from "./components/DadJoke";
import Fact from "./components/Fact";
import Giphy from "./components/Giphy";
import 'bootstrap/dist/css/bootstrap.min.css'
// import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <Cocktail />
          <Fact />
          <DadJoke />
          <Giphy />
    
      </header>
    </div>
  );
}

export default App;
