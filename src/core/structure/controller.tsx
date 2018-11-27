import React from 'react';

export function Controller(options): ClassDecorator {
  return function decorateController<T>(Class): any {
    const View = options.template;
    return class extends Class {
      constructor(props) {
        super(props);
      }

      render() {
        return <View ctrl={this}/>
      }
    };
  }
}

export type Template<Ctrl> = (props: { ctrl: Ctrl }) => JSX.Element;
