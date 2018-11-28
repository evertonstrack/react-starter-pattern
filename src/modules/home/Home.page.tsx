import { Component } from 'react';
import { Controller, Action } from '../../core/structure';

import { HomeTemplate } from './Home.template';

@Controller({
  template: HomeTemplate,
})
export class HomePage extends Component<{}, typeof HomePage.initialState> {
  static initialState = {
    isLoading: true,
    list: [],
    selected: null
  };

  readonly state = HomePage.initialState;

  componentDidMount() {
    fetch('./mock-list.json')
      .then(res => res.json())
      .then(list =>
        this.setState({
          list,
          isLoading: false
        })
      )
      .catch(err => console.log(err));
  }

  @Action
  select({ currentTarget }) {
    const index = currentTarget.dataset.id;

    if (index) {
      this.setState(prevState => ({
        selected: prevState.list[index]
      }));
      console.log(this.state.selected)
    }
  }
}
