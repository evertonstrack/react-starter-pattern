import { Component } from 'react';
import { Controller, Bind } from '../../core/structure';

import { HomeTemplate } from './Home.template';

const initialState = {
  isLoading: true,
  list: [],
  selected: null
};

@Controller({
  template: HomeTemplate,
})
export class HomePage extends Component<{}, typeof initialState> {
  readonly state = initialState;

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

  @Bind
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
