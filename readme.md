# Book Management System

## Tech Stack

```
*Frontend*
- NextJS - Typescript
- ApolloClient/GraphQL
- TailwindCSS
- DaisyUI
- Zustand
```

```
*Backend*
- Apollo Server
- GraphQL
- PrismaORM
- PostgreSQL
- TypeGraphQL
```

```
*DevOp*
- Git
- Docker
- Nginx
- Linux
```

## Run development

_Note: Require installed docker to run_
_.env: .env file must be created with the following environment variables_

- PG_USER (PostgreSQL Username)
- PG_PASSWORD (PostgreSQL Password)
- PG_DB (PostgreSQL Database)
- PORT (Apollo Server Port)

```sh
docker-compose --env-file .env up
```

## Schema (Prisma)

1. Enum Genre

```prisma
enum Genre {
FANTASY
DRAMA
DYSTOPIAN
ADVENTURE
ROMANCE
MYSTERY
HORROR
THRILLER
SCIENCEFICTION
HISTORIALFICTION
CHILDRENFICTION
}
```

2. Author Table

```prisma
model Author {
author_id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
name String
biography String?
created_at DateTime @default(now())
updated_at DateTime @updatedAt
Inventory Inventory[]
}
```

3. Inventory Table

```prisma
model Inventory {
entry_id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
title String
author Author @relation(fields: [authorAuthor_id], references: [author_id])
genre Genre[]
publication_date DateTime
isbn String @unique
authorAuthor_id String @db.Uuid
}
```

## Queries & Mutation (CRUD)

_book as inventory_

### Queries

- GetAllBooks
- GetAllAuthors
- CheckAuthor

### Mutations

- UpdateOneAuthor
- UpdateOneBook
- DeleteManyBooks
- DeleteManyAuthors
- CreateOneAuthor
- CreateOneBook

## UI Interactions

- Create A Book Form
- Create An Author Form
- Switch table between Book and Author
- Search By Book Title or Author's Name
- Filter (OrderBy field)
- Download (Export as JSON or CSV)
- Update Book Form (or) Author Form
- Delete Books or authors by selections
- Fields validations - ISBN, Date, check author

## Performance

- GraphQL Cache: every request stores in cache
- NextJS SSR(Server-side-rendering): Faster load time
