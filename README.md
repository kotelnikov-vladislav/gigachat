# ИИ Чат

Привет! Этот проект представляет собой простой чат с искусственным интеллектом (GigaChat) на основе технологий React, TypeScript, Python, Flask и Docker.

## Технологии

![React](https://img.shields.io/badge/React-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Python](https://img.shields.io/badge/Python-blue)
![Flask](https://img.shields.io/badge/Flask-blue)
![Docker](https://img.shields.io/badge/Docker-blue)

## Установка

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
