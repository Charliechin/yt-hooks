import React, { useState, useEffect } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');


  const onSubmit = event => {
    event.preventDefault();
    // TODO: Callback from parent component
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;