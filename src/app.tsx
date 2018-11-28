import React, { Component } from 'react';
import { HomeComponent } from './modules/home/home.component';

import './theme/theme.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>React Stater Pattern</h1>
        </header>
        <HomeComponent />
      </div>
    );
  }
}
