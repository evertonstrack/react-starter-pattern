import { IHomeControllerProps } from './Home.types';
import Bind from './../../core/decorators/bind';
import { Controller } from '../../core/controller/controller';

const initialState = {
  isLoading: true,
  list: [],
  selected: null
};

export class HomeController extends Controller<IHomeControllerProps, typeof initialState> {
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

  render() {

    const renderProps = {
      data: {
        list: this.state.list,
        language: this.props.lang,
      },
      methods: {
        select: this.select
      }
    };

    return this.props.children(renderProps);
  }

}
