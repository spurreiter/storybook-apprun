import { apprun, Component } from 'apprun'

import { render } from './render'

export default {
  title: 'Demo',
}

export const Counter = () => {
  class Counter extends Component {
    state = 0;
    view = state => (
      <div>
        <h1>{state}</h1>
        <button $onclick='-1'>-1</button>
        <button $onclick='+1'>+1</button>
      </div>
    );
    update = {
      '+1': state => state + 1,
      '-1': state => state - 1
    };
  }
  return render(Counter)
}
