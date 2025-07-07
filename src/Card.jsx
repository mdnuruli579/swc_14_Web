import React from "react";

const Card = ({product}) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        maxWidth: "100%",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "150px",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <strong className="text-success">${product.price}</strong>
      </div>
    </div>
  );
};

export default Card;
