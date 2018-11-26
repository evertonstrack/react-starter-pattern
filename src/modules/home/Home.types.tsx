import { ReactNode } from 'react';

export interface IHomeProps {
  children: (data: IHomeState) => ReactNode,
}


export interface IHomeState {
  data: Array<any>,
  isLoading: Boolean
}
