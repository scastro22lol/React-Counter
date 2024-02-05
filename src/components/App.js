import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, resetCount, resetClicks, addNumber } from '../actions/index';

class App extends React.Component {
  state = {
    inputCount: ''
  };

  handleInputChange = (e) => {
    this.setState({ inputCount: e.target.value });
  };

  handleCountReset = () => {
    const { addNumber, resetClicks } = this.props;
    const { inputCount } = this.state;
    const number = parseInt(inputCount);
    if (!isNaN(number)) {
      addNumber(number);
      resetClicks();
    }
    this.setState({ inputCount: '' });
  };

  render() {
    const { count, clicks, onIncrement, onDecrement } = this.props;
    const { inputCount } = this.state;

    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={count}
          clicks={clicks}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <br />
        <div>
          <input
            type="number"
            value={inputCount}
            onChange={this.handleInputChange}
            placeholder="Enter a number"
          />
          <button onClick={this.handleCountReset}>Change Count Number</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  resetCount,
  resetClicks,
  addNumber
};

const mapStateToProps = (state) => ({
  count: state.count,
  clicks: state.clicks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
