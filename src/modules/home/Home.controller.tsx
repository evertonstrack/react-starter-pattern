import { Component } from 'react';
import { IHomeProps, IHomeState } from './Home.types';
import Bind from './../../core/decorators/bind';

export class HomeController extends Component<IHomeProps, IHomeState> {

  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount() {

    fetch('./mock-list.json')
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .then(() => this.setState({ isLoading: false }))
      .catch(err => console.log(err));
  }

  @Bind
  add() {

    console.log('aqui')
  }

  render() {

    return (
      !this.state.isLoading && this.props.children(this.state)
    );
  }
}
