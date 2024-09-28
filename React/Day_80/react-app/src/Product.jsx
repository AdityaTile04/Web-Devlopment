import React from "react";

import "./App.css";

function Product({ title, price, description, features = [] }) {
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "yellow" : "white" };
  return (
    <div className="Product" style={styles}>
      <h2> {title} </h2>
      <h4>{description}</h4>
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      <h4>Price : {price}</h4>
      {isDiscount ? <p>5% Discount</p> : null}
    </div>
  );
}

export default Product;
