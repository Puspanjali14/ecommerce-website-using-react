import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        margin: "1rem auto",
        display: "block",
        padding: "0.5rem",
        width: "80%",
      }}
    />
  );
}

export default SearchBar;
