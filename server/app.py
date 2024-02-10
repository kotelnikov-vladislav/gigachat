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

"""
Запрос к роуту должен выглядеть так:
{
    model: 'gigaChat' | 'yaChat',
    content: string
}
"""


@app.route('/new-msg', methods=['POST'])
def new_msg():
    content = request.json['content']
    model = request.json['model']
    
    res = chat.getAnswer(model, content)
    
    
    return jsonify({
        'msg': res.content
    })


if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0')