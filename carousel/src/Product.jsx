import React from "react";

const Product = ({imageurl , name ,  price , description}) => {
  return (
    <div className="card">
      <img
        className="product--image"
        src={imageurl}
        alt="product"
      />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default Product;
