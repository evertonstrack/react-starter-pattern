import React from 'react';
import { Template } from '../../core/structure';

import { Post } from './Home.types';
import { HomePage } from './Home.page';

export const HomeTemplate: Template<HomePage> = ({ ctrl }) => {
  const { list } = ctrl.state;

  return (
    <ul>
      {list.map((item: Post, index) =>
        <li key={item.title} data-id={index} onClick={ctrl.select}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </li>
      )}
    </ul>
  );
};
