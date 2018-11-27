import React from 'react';

export const HomeTemplate = (props: any) => {

  const { data } = props;

  return (
    <ul>
      {data.map((item: any) => 
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </li>
      )}  
    </ul>
  );
}