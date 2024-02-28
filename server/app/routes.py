import uuid
from flask import Blueprint, jsonify, request, session
from chat import Chat
from utils import check_session_id, msg_item_model_to_dict
from config import GIGACHAT_API_KEY, SESSION_ID, YACHAT_GPT_API_KEY, YACHAT_GPT_MODEL_URL
from models import db, Message

main_bp = Blueprint('main', __name__)
chat = Chat(
    GIGACHAT_API_KEY,
    YACHAT_GPT_API_KEY,
    YACHAT_GPT_MODEL_URL
)

@main_bp.route('/new-msg', methods=['POST'])
def new_msg():
    print(session)

    if check_session_id():
        return check_session_id()

    content = request.json.get('content', '')
    model = request.json.get('model', '')

    res = chat.getAnswer(session.get(SESSION_ID), model, content)

    return jsonify({
        'content': res.content
    })


@main_bp.route('/prompt', methods=['POST'])
def set_prompt():
    if check_session_id():
        return check_session_id()

    prompt = request.json.get('prompt', '')
    chat.setPrompt(session.get(SESSION_ID), prompt)

    return jsonify({'status': True})


@main_bp.route('/params', methods=['GET'])
def get_params():
    if check_session_id():
        return check_session_id()

    return jsonify(chat.getParams(session.get(SESSION_ID)))


@main_bp.route('/ping', methods=['GET'])
def get_ping():
    if SESSION_ID not in session:
        session[SESSION_ID] = uuid.uuid4()

    return jsonify({'status': True})


# ------- Только для теста -------

@main_bp.route('/get_all_messages', methods=['GET'])
def get_all_messages():
    messages = db.session.execute(db.select(Message).order_by(Message.session_id)).scalars()
    messages_list = [msg_item_model_to_dict(message) for message in messages]
    return jsonify({'messages': messages_list})
