import React from "react";

const Filter = ({ filterName, onFilterChange }) => {
  return (
    <div>
      filter shown with <input value={filterName} onChange={onFilterChange} />
    </div>
  );
};
export default Filter;
