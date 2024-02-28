from flask import Flask
from flask_cors import CORS
from routes import main_bp
from config import SESSION_SECRET_KEY, SQLALCHEMY_DATABASE_URI
from models import db

def create_app():
    app = Flask(__name__)
    app.register_blueprint(main_bp)
    app.secret_key = SESSION_SECRET_KEY
    app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
    CORS(app, supports_credentials=True)

    with app.app_context():
        db.init_app(app)
        db.create_all()

    return app

app = create_app()

if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')

