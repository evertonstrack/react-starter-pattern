import React from 'react';

const reactComponentKeywords = [
  'componentDidMount',
  'constructor'
];

function getAllPropertiesFromParent(obj) {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(obj)));
}

export function Controller(options): ClassDecorator {
  return function decorateController<T>(Class): any {
    const View = options.template;
    return class extends Class {
      actions = {};

      constructor(props) {
        super(props);

        getAllPropertiesFromParent(this)
          .filter(funcName => (
            !(reactComponentKeywords.indexOf(funcName) > -1)
          ))
          .forEach(funcName => {
            this.actions[funcName] = this[funcName];
          })
      }

      render() {
        return <View data={this.state} actions={this.actions} />
      }
    };
  }
}
