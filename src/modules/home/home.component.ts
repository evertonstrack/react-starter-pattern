import { Component } from 'react';
import { Controller, Bind } from '../../core/structure';

const initialState = {
  isLoading: true,
  list: [],
  selected: null
};

@Controller({
  // @ts-ignore
  template: import('./home.component.html'),
})
export class HomeComponent extends Component<{}, typeof initialState> {
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
