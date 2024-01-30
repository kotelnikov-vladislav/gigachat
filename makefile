BACK_IMAGE_NAME := chat-back
BACK_CONTAINER_NAME := chat-back-container

FRONT_IMAGE_NAME := chat-front
FRONT_CONTAINER_NAME := chat-front-container


back-build:
	docker build -t ${BACK_IMAGE_NAME} ./backend


back-run:
	docker run -d --rm -p 8000:8000 --name ${BACK_CONTAINER_NAME} ${BACK_IMAGE_NAME}


back-stop:
	docker stop ${BACK_CONTAINER_NAME}




front-build:
	docker build -t ${FRONT_IMAGE_NAME} ./frontend


front-run:
	docker run -d --rm -p 80:80 --name ${FRONT_CONTAINER_NAME} ${FRONT_IMAGE_NAME}


front-stop:
	docker stop ${FRONT_CONTAINER_NAME}


build:
	make back-build && make front-build

run:
	make back-run && make front-run

stop:
	make back-stop && make front-stop