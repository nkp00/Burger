import React, { Component } from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.totalPrice}>Total price : {props.price}$</p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            handleClick={props.handleClick}
          ></BuildControl>
        );
      })}
      <button className={classes.btn}>Check Out</button>
      {/* <BuildControl label="Salad"></BuildControl> */}
    </div>
  );
};

export default BuildControls;
