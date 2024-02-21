from flask import Flask
from flask_cors import CORS
from routes import main_bp
from config import SESSION_SECRET_KEY


app = Flask(__name__)
app.register_blueprint(main_bp)
app.secret_key = SESSION_SECRET_KEY
CORS(app)


if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')
