import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchBarProps = {
  searchCity: string;
  setSearchCity: (value: string) => void;
  handleSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchCity,
  setSearchCity,
  handleSearch,
}) => {
  return (
    <div className="searchArea">
      <input
        type="text"
        placeholder="Enter a city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <div className="searchCircle">
        <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
