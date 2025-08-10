import React from "react";

const StockCard = ({ symbol, price, change }) => {
  const color = change >= 0 ? "green" : "red";

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      margin: "1rem",
      borderRadius: "10px",
      background: "#f8f8f8",
      width: "200px"
    }}>
      <h3>{symbol}</h3>
      <p>Price: ${price}</p>
      <p style={{ color }}>Change: {change}%</p>
    </div>
  );
};

export default StockCard;
