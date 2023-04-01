import React from "react";

import "../../../styles/product-card.css";

const Restaurant = (props) => {
  const { nome, logo, endereco } = props.item;

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={logo} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>{nome}</h5>
      </div>
      <div className="product__content">
        <p>{endereco}</p>
      </div>
    </div>
  );
};

export default Restaurant;
