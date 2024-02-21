from flask import jsonify, session
from config import SESSION_ID


def check_session_id():
    if SESSION_ID not in session:
        return jsonify({'status': False, 'error': 'Требуется авторизация'})