import React, { Component } from 'react';
import HomeController from './Home.controller';
import HomeTemplate from './Home.template';
import { IHomeState } from './Home.api';


class HomePage extends Component {

  render() {

    return (
      <HomeController>
        {(state : IHomeState ) => 
          <HomeTemplate {...state} />
        }
      </HomeController>
    );
  }
}

export default HomePage;