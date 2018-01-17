import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    const film = this.props.films[0];
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>Title: {film.title}</h1>
      </div>
    );
  }
}

export default FilmListing;
