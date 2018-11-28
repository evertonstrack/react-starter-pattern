export { Controller } from './controller';
export { Bind } from './bind';

export type Template<Ctrl> = (props: { ctrl: Ctrl }) => JSX.Element;
