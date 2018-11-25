import React, { Component } from 'react';
import HomePage from './features/Home/Home.page';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>React Stater Pattern</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
