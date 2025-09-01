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
        placeholder="Enter Exam Center Name"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCitySelect(query.trim().toLowerCase());
          }
        }}
        className="w-[30vw] h-[7vh] px-4 border mx-[15px] border-[#4e847c] rounded-xl placeholder:font-inter placeholder:text-[#6c757d] placeholder:font-normal placeholder:text-[20px] placeholder:mx-[10px]"
      />
    </div>
  );
}

export default SearchBar;
