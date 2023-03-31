import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabelut,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
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
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="query"
        value={query}
        placeholder="Search movies"
        autoComplete="off"
        autoFocus
        onChange={handleQueryChange}
      />
      <SearchFormButton type="submit">
        <SearchFormButtonLabelut>Search</SearchFormButtonLabelut>
      </SearchFormButton>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
