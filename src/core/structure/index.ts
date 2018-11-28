export { Controller } from './controller';
export { Action } from './action';

// @ts-ignore
export type Template<Ctrl> = (props: { data: typeof Ctrl.initialState, actions: Ctrl }) => JSX.Element;
