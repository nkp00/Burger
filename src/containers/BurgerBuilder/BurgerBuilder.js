import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const Price = {
  salad: 0.5,
  bacon: 0.8,
  cheese: 1.0,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4.0,
  };

  handleClick = (label, btn) => {
    label = label.toLowerCase();
    let price = +this.state.totalPrice;
    let ingredients = { ...this.state.ingredients };

    if (btn == "add") {
      ingredients[label] = ingredients[label] + 1;
      price += Price[label];
    } else {
      if (ingredients[label] == 0) return;
      ingredients[label] = ingredients[label] > 0 ? ingredients[label] - 1 : 0;
      price -= Price[label];
    }
    console.log({ price });
    price = price.toFixed(2);
    this.setState({ ingredients: ingredients, totalPrice: price });
  };

  render() {
    const currentPrice = this.state.totalPrice;
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          handleClick={this.handleClick}
          price={this.state.totalPrice}
        ></BuildControls>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
