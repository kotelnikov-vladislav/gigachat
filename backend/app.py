from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.schema import HumanMessage, SystemMessage
from langchain.chat_models.gigachat import GigaChat
from dotenv import dotenv_values

config = dotenv_values('.env')

app = Flask(__name__)
CORS(app)

chat = GigaChat(credentials=config.get('CREDENTIALS'), verify_ssl_certs=False)

messages = [
    SystemMessage(
        content='Ты Бертрам Гилфойл из сериала силиконовая долина'
    )
]


@app.route('/new-msg', methods=['POST'])
def new_msg():
    msg = request.json['msg']
    messages.append(HumanMessage(content=msg))
    res = chat(messages)
    messages.append(res)
    
    return jsonify({
        'msg': res.content
    })


if __name__ == '__main__':
    app.run(port=8000)