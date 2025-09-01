import React, { useState } from "react";

function SearchBar({ onQueryChange, onCitySelect }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onQueryChange(val.toLowerCase());
  };

  return (
    <div className="flex flex-row justify-around">
      <input
        type="text"
        placeholder="Enter city name in India"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCitySelect(query.trim().toLowerCase());
          }
        }}
        className="w-80vw h-[3px] p-4 border-[1px] border-[#4e847c] rounded-xl my-[15px] mx-[20px] placeholder:font-inter placeholder:text-[#6c757d] placeholder:font-normal placeholder:text-[14px]"
      />
      <button
        onClick={() => onCitySelect(query.trim().toLowerCase())}
        className="w-full sm:w-40 bg-[#4e847c] text-white text-lg font-medium font-inter rounded-md h-10 mt-4 my-[20px] mx-auto block border-[#2caa9d]"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
