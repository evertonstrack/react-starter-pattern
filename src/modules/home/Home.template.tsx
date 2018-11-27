import React, { FC } from 'react';
import { IHomeRenderProps } from './Home.types';

export const HomeTemplate: FC<IHomeRenderProps> = ({ data, methods }) => {
  const { list } = data;
  const { select } = methods;

  return (
    <ul>
      {list.map((item, index) =>
        <li key={item.title} data-id={index} onClick={select}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </li>
      )}  
    </ul>
  );
};
