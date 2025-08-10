from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/stock/<symbol>", methods=["GET"])
def get_stock(symbol):
    dummy_data = {
        "symbol": symbol.upper(),
        "name": "Apple Inc." if symbol.upper() == "AAPL" else "Unknown Corp",
        "price": 198.34,
        "change": 1.23
    }
    return jsonify(dummy_data)

if __name__ == "__main__":
    app.run(debug=True)
