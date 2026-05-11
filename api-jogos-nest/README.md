# Trabalho Prático: API Mobile

API desenvolvida em NestJS com SQLite para gerenciar uma biblioteca pessoal de jogos e suas avaliações.

## Requisitos atendidos

- POST /login
- GET /jogos
- GET /jogos/:id
- POST /jogos
- PUT /jogos/:id
- DELETE /jogos/:id
- Banco de dados SQLite
- CRUD completo de jogos/reviews
- Validação de campos obrigatórios no POST e PUT
- DELETE retornando 204 No Content

## Como rodar

```bash
npm install
npm run start:dev
```

A API ficará disponível em:

```bash
http://localhost:3000
```

O banco `database.sqlite` será criado automaticamente na raiz do projeto.

## Login

POST `http://localhost:3000/login`

```json
{
  "email": "usuario@esoft.com",
  "password": "Abc123"
}
```

Resposta esperada:

```json
{
  "token": "550e8400-e29b-41d4-a716-446655440000"
}
```

## Listar jogos

GET `http://localhost:3000/jogos`

## Buscar jogo por ID

GET `http://localhost:3000/jogos/1`

## Cadastrar jogo

POST `http://localhost:3000/jogos`

```json
{
  "nome": "Elden Ring",
  "tipo": "RPG",
  "nota": 9,
  "review": "Desafiador e visualmente impecável."
}
```

## Atualizar jogo

PUT `http://localhost:3000/jogos/3`

```json
{
  "nome": "Elden Ring - DLC",
  "tipo": "RPG",
  "nota": 10,
  "review": "Melhorou o que já era perfeito."
}
```

## Remover jogo

DELETE `http://localhost:3000/jogos/3`

Resposta esperada: `204 No Content`.
