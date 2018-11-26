import React, { Component } from 'react';
import { HomeController } from './Home.controller';
import { HomeTemplate } from './Home.template';
import { IHomeState } from './Home.types';

export const HomePage = (props: any) => (
  <HomeController {...props}>
    {(state : IHomeState ) => 
      <HomeTemplate {...state} />
    }
  </HomeController>
);