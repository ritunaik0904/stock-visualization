from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Replace with your real Alpha Vantage API key
ALPHA_VANTAGE_API_KEY = "2RJHQAZ12HFFI2ED"

@app.route("/")
def home():
    return {"message": "Stock API working!"}

@app.route("/stock/<symbol>")
def get_stock(symbol):
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={ALPHA_VANTAGE_API_KEY}"
    response = requests.get(url)
    data = response.json()

    # Get latest 5 days
    time_series = data.get("Time Series (Daily)", {})
    sliced = dict(list(time_series.items())[:5])

    return jsonify(sliced)

if __name__ == "__main__":
    app.run(debug=True)
