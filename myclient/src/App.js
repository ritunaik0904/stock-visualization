import React, { useState } from 'react';
import './App.css';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const getStockData = async () => {
    const response = await fetch(`http://127.0.0.1:5000/stock/${symbol}`);
    const data = await response.json();
    setStockData(data);
  };

  return (
    <div className="App">
      <h1>📈 Stock Insights Dashboard</h1>
      <input 
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter Stock Symbol (e.g. AAPL)"
      />
      <button onClick={getStockData}>Get Data</button>

      {stockData && (
        <div>
          <h2>{stockData.name} ({stockData.symbol})</h2>
          <p>Price: ${stockData.price}</p>
          <p>Change: {stockData.change}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
