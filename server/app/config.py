from dotenv import dotenv_values

config = dotenv_values('.env')

DEFAULT_PROMPT = 'Отвечай так, как будто бы ты личный виртуальный помощник'

SESSION_ID = 'sessionId'
SESSION_SECRET_KEY = config.get('SESSION_SECRET_KEY')

GIGACHAT_API_KEY = config.get('GIGACHAT_API_KEY')
YACHAT_GPT_API_KEY = config.get('YACHAT_GPT_API_KEY')
YACHAT_GPT_MODEL_URL = config.get('YACHAT_GPT_MODEL_URL')
