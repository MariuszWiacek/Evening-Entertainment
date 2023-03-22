
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import App from './App';import './index.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 10000); // Set loading to false after 10 seconds
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <Intro /> : <App />}
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


