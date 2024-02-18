from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import dotenv_values
from chat import Chat

config = dotenv_values('.env')

app = Flask(__name__)
CORS(app)

chat = Chat(
    config.get('GIGACHAT_API_KEY'),
    config.get('YACHAT_GPT_API_KEY'),
    config.get('YACHAT_GPT_MODEL_URL')
)

@app.route('/new-msg', methods=['POST'])
def new_msg():
    content = request.json.get('content', '')
    model = request.json.get('model', '')

    res = chat.getAnswer(model, content)
    
    return jsonify({
        'content': res.content
    })

@app.route('/prompt', methods=['POST'])
def set_prompt():
    prompt = request.json.get('prompt', '')

    prompt = 'Отвечай так, как будто бы ты личный виртуальный помощник' if len(prompt) == 0 else prompt

    chat.setPrompt(prompt)

    return jsonify({'status': True})

@app.route('/params', methods=['GET'])
def get_params():
    prompt = ''
    
    if chat.messages:
        first_message = chat.messages[0].dict()
        prompt = first_message.get('content') if first_message.get('type') == 'system' else '' 

    return jsonify({'prompt': prompt})

if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')
