import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClickIncrement = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }

  handleClickDecrement = () => {
    this.setState(state => {
      return {
        count: state.count - 1
      }
    })
  }

  handleClickReset = () => {
    this.setState(state => {
      return {
        count: state.count = 0
      }
    })
  }


  render() {
    return (
        <div>
          <button onClick={this.handleClickIncrement}>Click (+)</button>
          <div>{this.state.count}</div>
          <button onClick={this.handleClickDecrement}>Click (-)</button>
          <button onClick={this.handleClickReset}>Click (reset)</button>

        </div>
    )
  }

}




export default App;
