import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
        alert('Please enter a query!');
        return;
    }

    onSubmit(query);
    setQuery('');    
};

  const handleQueryChange = event => {
setQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" value="query" placeholder="Search movies" autoComplete='off' autofocus onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
