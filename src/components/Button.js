import React, { Component } from 'react';
import '../css/Button.css';

class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.btnClick} className="btn">Next</button>
      </div>
    );
  }
}

export default Button;