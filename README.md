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

## Установка (временно не актуально)

Для запуска проекта вам понадобится Docker. Выполните следующие шаги:

1. Склонируйте репозиторий:

```
https://github.com/kotelnikov-vladislav/gigachat.git
```

2. Для работы с API GIGACHAT необходимо получить токен. О том, как его получить - читайте [здесь](https://developers.sber.ru/docs/ru/gigachat/api/integration-individuals)
3. Далее нужно в server/.env указать авторизационные данные в таком формате:

```
# Авторизационные данные
CREDENTIALS= <ВАШ ТОКЕН>
```

4. Соберите докер образ `docker compose build`
5. Поднимите контейнер `docker compose up`
6. Готово! Сайт доступен по адрессу http://localhost

## Дальнейшие планы:

- [ ] Подтнять nginx для серверной части
- [ ] Подключить ssl сертификаты
- [ ] Разделить контект сообщений для пользователей
- [ ] Привести стили в порядок
