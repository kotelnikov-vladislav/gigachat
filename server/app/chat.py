from langchain.chat_models.gigachat import GigaChat
from langchain_community.chat_models import ChatYandexGPT
from langchain.schema import HumanMessage, SystemMessage, AIMessage
from models import Message, db
from utils import msg_list_model_to_list

class Chat:
    def __init__(self, gigchat_api_key: str, yaChat_api_key: str, yaChat_model_uri: str):
        self.messages = list()
        self.models = {
            "gigaChat": GigaChat(credentials=gigchat_api_key, verify_ssl_certs=False),
            "yaChat": ChatYandexGPT(api_key=yaChat_api_key, model_uri=f'gpt://{yaChat_model_uri}/yandexgpt-lite')
        }

    def setPrompt(self, session_id, prompt: str):
        historyMessages = Message.query.filter_by(session_id=str(session_id)).all()
        systemMessage = Message(session_id, prompt, 'system')

        for message in historyMessages:
            db.session.delete(message)
        
        db.session.add(systemMessage)
        db.session.commit();

    def getParams(self, session_id):
        historyMessages = msg_list_model_to_list(
            Message.query
                .filter_by(session_id=str(session_id))
                .filter_by(author='system').all()
        )
        prompt = historyMessages[0].get('content') if len(historyMessages) > 0 else 'Отвечай так, как будто ты личный ассистент'

        return {
            'prompt': prompt
        }
        
    def getAnswer(self, session_id, model, content: str):
        historyMessages = msg_list_model_to_list(
            Message.query
                .filter_by(session_id=str(session_id))
                .order_by(Message.timestep.asc())
                .all()
        )
        historyMessagesForBot = list()

        for message in historyMessages:
            if message.get('author') == 'system':
                content= message.get('content') if len(message.get('content')) > 0 else 'Отвечай так, как будто ты личный ассистент'
                historyMessagesForBot.append(SystemMessage(content=content))
            elif message.get('author') == 'ai':
                historyMessagesForBot.append(AIMessage(content=message.get('content')))
            else:
                historyMessagesForBot.append(HumanMessage(content=message.get('content')))

        historyMessagesForBot.append(HumanMessage(content=content))

        bot_answer = self.models[model](historyMessagesForBot)

        user_message = Message(session_id, content, 'human')
        bot_message = Message(session_id, bot_answer.content, 'ai')

        db.session.add(user_message)
        db.session.add(bot_message)
        db.session.commit()
        
        return bot_answer

