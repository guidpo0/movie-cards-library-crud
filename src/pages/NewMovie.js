import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { history } = this.props;
    movieAPI.createMovie(newMovie).then(() => history.push('/'));
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm title="Adicionar Filme" onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.func.isRequired,
};

export default NewMovie;
