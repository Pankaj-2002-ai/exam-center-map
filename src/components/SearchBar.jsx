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
        placeholder="Enter Exam Center"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCitySelect(query.trim().toLowerCase());
          }
        }}
        className="w-[40vw] 
                  h-[40px]  
                  md:h-[5vh]
                  px-4 
                  border 
                  mx-[15px] 
                  my-[15px] 
                  border-[#4e847c] 
                  rounded-xl 
                  placeholder:font-inter 
                  placeholder:text-[#6c757d] 
                  placeholder:font-normal 
                  placeholder:text-[12px] 
                  md:placeholder:text-[20px] 
                  placeholder:mx-[10px]"
      />
    </div>

  );
}

export default SearchBar;
