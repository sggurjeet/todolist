import React from "react";

function FilterButton(props) {
  return (
    <button onClick={props.onClick}>
      <span>Show </span>
      <span>{props.name}</span>
      <span> tasks</span>
    </button>
  );
}

export default FilterButton;
