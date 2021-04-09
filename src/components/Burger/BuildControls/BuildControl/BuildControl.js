import React, { Component } from "react";
import classes from "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <button
        onClick={() => props.handleClick(props.label, "add")}
        className={classes.More}
      >
        Add
      </button>
      <button
        onClick={() => props.handleClick(props.label, "less")}
        className={classes.Less}
      >
        Less
      </button>
    </div>
  );
};

export default BuildControl;
