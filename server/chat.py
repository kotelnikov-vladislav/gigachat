from typing import List, Dict, Union, Literal
from langchain.chat_models.gigachat import GigaChat
from langchain_community.chat_models import ChatYandexGPT
from langchain.schema import HumanMessage, SystemMessage

ModelType = Literal["gigaChat", "yaChat"]

class Chat:
    def __init__(self, gigchat_api_key: str, yaChat_api_key: str, yaChat_model_uri: str) -> None:
        self.messages: List[Union[HumanMessage, SystemMessage]] = []
        self.models: Dict[ModelType, Union[GigaChat, ChatYandexGPT]] = {
            "gigaChat": GigaChat(credentials=gigchat_api_key, verify_ssl_certs=False),
            "yaChat": ChatYandexGPT(api_key=yaChat_api_key, model_uri=f'gpt://{yaChat_model_uri}/yandexgpt-lite')
        }

    def setPrompt(self, prompt: str) -> None:
        self.messages = [
            SystemMessage(content=prompt)
        ]
        
    def getAnswer(self, model: ModelType, content: str) -> any:
        self.messages.append(HumanMessage(content=content))
        return self.models[model](self.messages)
