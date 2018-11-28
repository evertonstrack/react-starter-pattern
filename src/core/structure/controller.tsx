import React from 'react';

export function Controller(options): ClassDecorator {
  return function decorateController<T>(Class): any {
    return class extends Class {
      View: Function | null = null;
      constructor(props) {
        super(props);
        options.template.then(v => {
          this.View = v.default;
          this.setState({});
        });
      }

      render() {
        const { View } = this;
        // @ts-ignore
        return View && <View ctrl={this} />
      }
    };
  }
}
