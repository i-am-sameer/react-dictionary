import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      word: ''
    }
  }
  render() {

    const searchForWord = (event) => {
      this.setState({word: event.target.value})
    }

    return (
      <div className='App'>
        <input 
          type='text'
          className='mainSearchBox' 
          title='Type something' 
          placeholder='Type something'
          value={this.state.word} 
          onChange={searchForWord}
        />
      </div>
    );
  }
}

export default Input;
