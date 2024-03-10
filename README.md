![React](https://img.shields.io/badge/React-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Python](https://img.shields.io/badge/Python-blue)
![Flask](https://img.shields.io/badge/Flask-blue)
![Docker](https://img.shields.io/badge/Docker-blue)

<div align='center'>
	<img src='https://i.ibb.co/ThxHv0c/aichat.png' />
	<p></p>
	<h1 align='center'>AI Chat</h1>
	<p align='center'>
		🤖 Добро пожаловать в AI Chat - веб-сайт для общения с искусственным интеллектом!
	<p>
	<p>
		🚀 Здесь вы можете поговорить с моделями YandexGPT и GigaChat на разные темы, чтобы узнать что-то новое или просто пообщаться.
	</p>
</div>

## Установка

### 1. Склонируйте репозиторий:

```
https://github.com/kotelnikov-vladislav/gigachat.git
```

### 2. Настройка окружения

В корне проекта создайте .env файл со следующим содержимым:

```
HOST= <http(s)://ваш домен> # http://localhost для запуска на локальном устройстве

# Авторизационные данные для моделей.
GIGACHAT_API_KEY= <Ваш токен доступа для гигачата>

YACHAT_GPT_API_KEY= <Ваш ключ доступа для яндекс гпт>
YACHAT_GPT_MODEL_URL= <Ваш индификатор каталога>

# Данные для сервера
SESSION_SECRET_KEY= <секретный ключ для сессии> # Любая последовательность символов

# БД
POSTGRES_USER= <имя пользователя БД> # Любая последовательность символов
POSTGRES_PASSWORD= <пароль пользователя БД> # Любая последовательность символов
```

О том, как получить `GIGACHAT_API_KEY` для гигачата, можно узнать [здесь](https://developers.sber.ru/docs/ru/gigachat/api/integration-individuals)

О том, как получить `YACHAT_GPT_API_KEY` и `YACHAT_GPT_MODEL_URL` для яндекс гпт, читайте [здесь](https://habr.com/ru/articles/780008/).

### 3. Поднимаем!

1. `docker compose build`
2. `docker compose up`
3. Готово! Сайт доступен по адрессу http://localhost

## Дальнейшие планы:

- [ ] Подтнять nginx для серверной части
- [ ] Подключить ssl сертификаты
- [x] Разделить контект сообщений для пользователей
- [ ] Привести стили в порядок
