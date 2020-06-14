import React from "react";

// The All filter shows all tasks, so we return true for all tasks.
// The Active filter shows tasks whose completed prop is false.
// The Completed filter shows tasks whose completed prop is true.

function FilterButton(params) {
  return(
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  )
};

export default FilterButton