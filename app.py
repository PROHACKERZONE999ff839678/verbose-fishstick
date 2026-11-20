from datetime import datetime
from flask import Flask, render_template, jsonify

app = Flask(__name__)

GAMES = [
    {"name": "FREE FIRE MAX", "symbol": "🔥", "tag": "BATTLE ROYALE"},
    {"name": "MINI MILITIA", "symbol": "🪖", "tag": "ACTION"},
    {"name": "STICK WAR LEGACY", "symbol": "⚔️", "tag": "STRATEGY"},
    {"name": "SUBWAY SURFERS", "symbol": "🏃", "tag": "RUNNER"},
    {"name": "DEAD TARGET", "symbol": "🧟", "tag": "ZOMBIE ACTION"},
    {"name": "GRANNY", "symbol": "👻", "tag": "HORROR"},
]

@app.route("/")
def home():
    return render_template("index.html", games=GAMES, year=datetime.now().year)

@app.route("/api/games")
def games_api():
    return jsonify(GAMES)

if __name__ == "__main__":
    # Local development only. For public hosting, use a production WSGI server.
    app.run(host="127.0.0.1", port=5000, debug=True)
