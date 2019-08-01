import React from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  handleClick = (action) => {
    this.setState(state => {
      if(action === INCREMENT) {
        state.count += 1
      } else if (action === DECREMENT) {
        state.count -= 1
      } else {
        state.count = 0
      }

      return {
        ...state
      }
    })
  }


  render() {
    return (
        <div>
          <button onClick={() => {
            this.handleClick(INCREMENT)
          }}>Click (+)</button>
          <div>{this.state.count}</div>
          <button onClick={() => {
            this.handleClick(DECREMENT)
          }}>Click (-)</button>
          <button onClick={() => {
            this.handleClick(RESET)
          }}>Click (reset)</button>

        </div>
    )
  }

}




export default App;
