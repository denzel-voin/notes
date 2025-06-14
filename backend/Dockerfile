FROM node:18

WORKDIR /app

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копируем всё остальное
COPY . .

# Устанавливаем права для скрипта ожидания
RUN chmod +x wait-for-it.sh

CMD [ "sh", "-c", "./wait-for-it.sh db:5432 -- npx nodemon" ]
