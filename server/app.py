import uuid
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from dotenv import dotenv_values
from chat import Chat

DEFAULT_PROMPT = 'Отвечай так, как будто бы ты личный виртуальный помощник'
SESSION_ID = 'sessionId'

config = dotenv_values('.env')

app = Flask(__name__)
app.secret_key = config.get('SESSION_SECRET_KEY')
CORS(app)

chat = Chat(
    config.get('GIGACHAT_API_KEY'),
    config.get('YACHAT_GPT_API_KEY'),
    config.get('YACHAT_GPT_MODEL_URL')
)


def check_session_id():
    if SESSION_ID not in session:
        return jsonify({'status': False, 'error': 'Требуется авторизация'})


@app.route('/new-msg', methods=['POST'])
def new_msg():
    if check_session_id():
        return check_session_id()

    content = request.json.get('content', '')
    model = request.json.get('model', '')

    res = chat.getAnswer(model, content)
    
    return jsonify({
        'content': res.content
    })


@app.route('/prompt', methods=['POST'])
def set_prompt():
    if check_session_id():
        return check_session_id()

    prompt = request.json.get('prompt', '')
    prompt = DEFAULT_PROMPT if len(prompt) == 0 else prompt
    chat.setPrompt(prompt)

    return jsonify({'status': True})


@app.route('/params', methods=['GET'])
def get_params():
    if check_session_id():
        return check_session_id()

    prompt = ''
    
    if chat.messages:
        first_message = chat.messages[0].dict()
        prompt = first_message.get('content') if first_message.get('type') == 'system' else '' 

    return jsonify({'prompt': prompt})


@app.route('/ping', methods=['GET'])
def get_ping():
    if SESSION_ID not in session:
        session[SESSION_ID] = uuid.uuid4()

    return jsonify({'status': True})


if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')
