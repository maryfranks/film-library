import React, { Component } from 'react';

class Fave extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isFave: false
    }
  }

  handleClick(event) {
    event.stopPropagation();
    console.log("handling Fave click");
    this.setState({isFave: !this.state.isFave});
  }

  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';

    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
