# Wavy / Fields Backend Challenge

### Descrição

Este é um repositório que foi criado para o Code Challenge da empresa Wavy / Fields

O projeto é uma api escrita em `NodeJS` para servir um app de ToDo List.

### Tecnologias utilizadas

- NodeJS
- Express
- Prisma

### Como rodar o projeto

Após clonar o projeto siga os passos abaixo:

- `npm install` para instalar todas as dependências
- Criar o arquivo `.env` e configurar a variável `DATABASE_URL` com a string de conexão para o banco de dados Postgres.
- Rodar o comando `npm run build`
- Rodar o comando `npx prisma migrate deploy`
- Rodar o comando `npm run start`