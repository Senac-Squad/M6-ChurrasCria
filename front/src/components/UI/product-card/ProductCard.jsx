import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";



const ProductCard = (props) => {
  const {id, descricao, imagem, preco} = props.item;



  return (
    <div className="product__item">
        <div className="product__img">
            <img src={imagem} alt="product-img" className="w-50" />
        </div>
        
        <div className="product__content">
            <h5>
              <Link to={`/foods/${id}`}>{descricao}</Link>
            </h5>
            <div className=" d-flex align-items-center justify-content-between ">
                <span className="product__price">R${preco}</span>
                <button className="addTOCart__btn">
                  Add Carrinho
                </button>
            </div>
        </div>
    </div>    
  );
};

export default ProductCard;