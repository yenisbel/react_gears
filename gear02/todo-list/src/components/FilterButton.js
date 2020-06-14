import React from "react";

// The All filter shows all tasks, so we return true for all tasks.
// The Active filter shows tasks whose completed prop is false.
// The Completed filter shows tasks whose completed prop is true.

function FilterButton(props) {
  return(
    <button type="button" className="btn toggle-btn" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  )
};

export default FilterButton