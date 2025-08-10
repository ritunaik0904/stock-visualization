import React, { useState } from "react";
import StockCard from "./StockCard";
import axios from "axios";

const StockDashboard = () => {
  const [symbol, setSymbol] = useState("");
  const [stock, setStock] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = () => {
    axios
      .get(`http://127.0.0.1:5000/stock/${symbol.toUpperCase()}`)
      .then((res) => {
        setStock({ symbol: symbol.toUpperCase(), ...res.data });
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Stock not found or API error");
        setStock(null);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., TSLA)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch Stock</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {stock && (
        <StockCard
          key={stock.symbol}
          symbol={stock.symbol}
          price={stock.price}
          change={stock.change}
        />
      )}
    </div>
  );
};

export default StockDashboard;
