import React, { Component } from 'react';
import './App.css';

import SignUp from './components/signUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>D&D 5th Edition</h1>
        </header>
        <main>
          <SignUp />
        </main>
      </div>
    );
  }
}

export default App;
