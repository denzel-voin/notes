FROM node:18

WORKDIR /app

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копируем исходники
COPY . .

# Генерация Prisma клиента
RUN npx prisma generate

# Копируем скрипт ожидания
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Запускаем миграции и приложение после готовности БД
CMD ["/wait-for-it.sh", "db:5432", "--", "sh", "-c", "npx prisma migrate dev --name init && npx ts-node server.ts"]
