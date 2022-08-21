import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [movieQuery, setMovieQuery] = useState('');

  function handleChange(event) {
    setMovieQuery(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (movieQuery.trim() === '') {
      return alert('Please enter movie name');
    }
    onSubmit(movieQuery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter movie name"
        value={movieQuery}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
