import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.btnClick} class="btn">Next</button>
      </div>
    );
  }
}

export default Button;