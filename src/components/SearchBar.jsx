import React from 'react';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBarTopContainer">
        Search
        <input type="text" id="stockSearchbar" name="stockSearchbar" value="" />
      </div>
      <div className="searchBarBottomContainer">
        <input
          type="checkbox"
          id="stockCheckbox"
          name="stockCheckbox"
          value="False"
        />
        Show only products in stock
      </div>
    </div>
  );
};

export default SearchBar;
