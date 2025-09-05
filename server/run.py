from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api", methods=["GET"])
def index():
    return jsonify({"message": "Welcome to Coding Craft YT Channel!"})

@app.route("/api/welcome", methods=["GET"])
def welcome():
    return jsonify({"message": "You are always welcome"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
