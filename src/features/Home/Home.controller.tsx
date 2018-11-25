/// <reference path="./Home.api.tsx" />

import { Component } from 'react';
import { IHomeProps, IHomeState } from './Home.api';

class HomeController extends Component<IHomeProps, IHomeState> {

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

  render() {

    return (
      !this.state.isLoading && this.props.children(this.state)
    );
  }
}

export default HomeController;