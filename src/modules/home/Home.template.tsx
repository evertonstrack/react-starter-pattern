import React from 'react';
import { Template } from '../../core/structure';

import { Post } from './Home.types';
import { HomePage } from './Home.page';

export const HomeTemplate: Template<HomePage> = ({ data, actions }) => {
  console.log(data, actions);

  return (
    <ul>
      {data.list.map((item: Post, index) =>
        <li key={item.title} data-id={index} onClick={actions.select}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </li>
      )}
    </ul>
  );
};
