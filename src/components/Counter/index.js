import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.onDecrement}
          testid="decrement-quantity"
        >
          -
        </button>
        <div>0</div>
        <button
          type="button"
          onClick={this.onIncrement}
          testid="increment-quantity"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
