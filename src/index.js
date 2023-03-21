
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
    // Simulate an API call or any other async operation
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 10000); // Set loading to false after 2 seconds
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


