from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(36), nullable=False)
    author = db.Column(db.Enum('system', 'human', 'ai', name='message_author'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    timestep = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)


    def __init__(self, session_id, content, author):
        self.session_id = session_id
        self.author = author

        if author == 'system' and content.strip() == '':
            self.content = 'Отвечай так, как будто ты личный ассистент'
        else:
            self.content = content
