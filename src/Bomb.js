// your Bomb code here!
<<<<<<< HEAD

import React from 'react';

class Bomb extends React.Component {

=======
import React, { Component } from React;

export default class Bomb extends Component {
  
>>>>>>> 44492d54a3e19be78f1e5051b2e77f92a78b9f06
  constructor(props) {
    super() 
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const warning = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
<<<<<<< HEAD

=======
>>>>>>> 44492d54a3e19be78f1e5051b2e77f92a78b9f06
    return (
      <div>{warning}</div>
    )
  }
}
<<<<<<< HEAD

export default Bomb;
=======
>>>>>>> 44492d54a3e19be78f1e5051b2e77f92a78b9f06
  
  
