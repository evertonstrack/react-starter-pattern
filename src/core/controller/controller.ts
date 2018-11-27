import { Component } from 'react';

export abstract class RenderProps {
  abstract data;
  abstract methods;
}

export interface ControllerProps {
  children: (args: RenderProps) => JSX.Element
}

export abstract class Controller<Props extends ControllerProps, State> extends Component<Props, State> {}

