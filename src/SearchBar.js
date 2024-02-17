import React from 'react';

const SearchBar = ({ onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search"
            onChange={onChange}
            className="search-bar"
        />
    );
};

export default SearchBar;
