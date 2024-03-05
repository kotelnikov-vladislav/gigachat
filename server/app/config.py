import os

SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@db:5432/postgres"

SESSION_ID = 'sessionId'
SESSION_SECRET_KEY = os.getenv('SESSION_SECRET_KEY')

GIGACHAT_API_KEY = os.getenv('GIGACHAT_API_KEY')
YACHAT_GPT_API_KEY = os.getenv('YACHAT_GPT_API_KEY')
YACHAT_GPT_MODEL_URL = os.getenv('YACHAT_GPT_MODEL_URL')
