from flask import jsonify, session
from config import SESSION_ID
from models import Message


# -------- Работа с сессией --------

def check_session_id():
    if SESSION_ID not in session:
        return jsonify({'status': False, 'error': 'Требуется авторизация'})


# -------- Работа с базой данных --------
def msg_item_model_to_dict(msg: Message):
    return {
        'id': msg.id,
        'session_id': msg.session_id,
        'author': msg.author,
        'content': msg.content,
        'timestep': msg.timestep,
    }


def msg_list_model_to_list(msg_list):
    return [msg_item_model_to_dict(message) for message in msg_list]