from dotenv import dotenv_values

config = dotenv_values('.env')

DB_HOST = 'db' if config.get('DEPLOY') == 'true' else 'localhost'

SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{config.get('POSTGRES_USER')}:{config.get('POSTGRES_PASSWORD')}@{DB_HOST}:5432/postgres"

SESSION_ID = 'sessionId'
SESSION_SECRET_KEY = config.get('SESSION_SECRET_KEY')

GIGACHAT_API_KEY = config.get('GIGACHAT_API_KEY')
YACHAT_GPT_API_KEY = config.get('YACHAT_GPT_API_KEY')
YACHAT_GPT_MODEL_URL = config.get('YACHAT_GPT_MODEL_URL')
