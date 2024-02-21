import uuid
from flask import Blueprint, jsonify, request, session
from config import DEFAULT_PROMPT, GIGACHAT_API_KEY, SESSION_ID, YACHAT_GPT_API_KEY, YACHAT_GPT_MODEL_URL
from chat import Chat
from utils import check_session_id

main_bp = Blueprint('main', __name__)
chat = Chat(
    GIGACHAT_API_KEY,
    YACHAT_GPT_API_KEY,
    YACHAT_GPT_MODEL_URL
)

@main_bp.route('/new-msg', methods=['POST'])
def new_msg():
    if check_session_id():
        return check_session_id()

    content = request.json.get('content', '')
    model = request.json.get('model', '')

    res = chat.getAnswer(model, content)
    
    return jsonify({
        'content': res.content
    })


@main_bp.route('/prompt', methods=['POST'])
def set_prompt():
    if check_session_id():
        return check_session_id()

    prompt = request.json.get('prompt', '')
    prompt = DEFAULT_PROMPT if len(prompt) == 0 else prompt
    chat.setPrompt(prompt)

    return jsonify({'status': True})


@main_bp.route('/params', methods=['GET'])
def get_params():
    if check_session_id():
        return check_session_id()

    prompt = ''
    
    if chat.messages:
        first_message = chat.messages[0].dict()
        prompt = first_message.get('content') if first_message.get('type') == 'system' else '' 

    return jsonify({'prompt': prompt})


@main_bp.route('/ping', methods=['GET'])
def get_ping():
    if SESSION_ID not in session:
        session[SESSION_ID] = uuid.uuid4()

    return jsonify({'status': True})