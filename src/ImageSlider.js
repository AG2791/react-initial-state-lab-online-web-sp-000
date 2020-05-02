// your ImageSlider code here!
<<<<<<< HEAD

import React from 'react';

export default class ImageSlider extends React.Component {

  constructor() {
    super() 

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
    )
  }
}

=======
import React, { Component } from 'react';


export default class ImageSlider extends component {
  constructor(props) {
    super()
    this.state = {
      currentSlideIndex: 0
    }
    
  }
  
  
    render() {
    return (
      I am on slide {this.state.currentSlideIndex}
    )
  }
  
}
>>>>>>> 44492d54a3e19be78f1e5051b2e77f92a78b9f06
