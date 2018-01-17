import React, { Component } from 'react';

class Fave extends Component {

  handleClick(event) {
    event.stopPropagation();
    console.log("handling Fave click");
  }

  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
