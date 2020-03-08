
import React, {Component} from 'react';
import './App.css';
import ApiCards from './ApiCards';

class App extends Component {
  render() {
      return (
          <div className="App">
            <ApiCards></ApiCards>
          </div>
      );
  }
}

export default App;