import React from 'react';
import { HomeController } from './Home.controller';
import { HomeTemplate } from './Home.template';

export const HomePage = (props: any) => (
  <HomeController {...props}>
    {(ctrl) =>
      <HomeTemplate {...ctrl} />
    }
  </HomeController>
);
