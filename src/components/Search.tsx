import React from 'react';

interface Props {
  setSearchValue: (i: string) => void;
}

const Search: React.FC<Props> = ({ setSearchValue }) => {
  return (
    <div className="search">
      <img src="images/geo-icon.svg" alt="" />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="find city.."
      />
    </div>
  );
};

export default Search;
