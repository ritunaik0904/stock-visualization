import { useState } from 'react';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/stock/${symbol}`);
      if (!response.ok) throw new Error('Stock not found');
      const data = await response.json();
      setStockData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setStockData(null);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📈 Stock Insights Dashboard</h1>
      <input
        type="text"
        placeholder="Enter Stock Symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={fetchStockData} style={{ padding: '0.5rem 1rem' }}>
        Fetch Data
      </button>

      {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

      {stockData && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{symbol} Stock Data</h2>
          <p><strong>Current Price:</strong> ${stockData.currentPrice}</p>
          <p><strong>High:</strong> ${stockData.high}</p>
          <p><strong>Low:</strong> ${stockData.low}</p>
          <p><strong>Open:</strong> ${stockData.open}</p>
          <p><strong>Previous Close:</strong> ${stockData.previousClose}</p>
        </div>
      )}
    </div>
  );
}

export default App;
