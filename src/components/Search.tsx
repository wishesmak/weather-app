import React from 'react';
import GeoMarkSvg from '../ui/GeoMarkSvg';

interface Props {
  setSearchValue: (i: string) => void;
  setIsNight: (i: boolean) => void;
  isNight: boolean;
}

const Search: React.FC<Props> = ({ setSearchValue, setIsNight, isNight }) => {
  return (
    <div className="search">
      <div className="search__inner">
        <GeoMarkSvg isNight={isNight} />
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="find city.."
        />
      </div>
      <button className="change-theme" onClick={() => setIsNight(!isNight)}>
        flip theme
      </button>
    </div>
  );
};

export default Search;
