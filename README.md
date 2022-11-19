<!-- @format -->

## Re:cord-SERVER
쉽게 지나치고 사라지는 나의 인간관계를 의미 있게 바꿔주는 인간 관계 아카이빙 서비스

> 31th SOPT Sopkathon    <br>
> 2022.11.19 ~

<br>

## Server 

| [강민재](https://github.com/m1njae) | [유수화](https://github.com/YuSuhwa-ve) |
| :----------------------------------------: | :---------------------------------: |
|  인물 리스트 조회, 인물 정보 변경 API 담당  |    인물 생성, 인물 상세 조회 API 담당|

<Hr>
<br>

## 😊 Our Convention

- [Coding convention](https://legend-mozzarella-452.notion.site/Code-Convention-1e9621e129734970933c6deea01591e5)
- [Commit convention](https://legend-mozzarella-452.notion.site/Commit-Convention-9fdce5f3ce114b018de9929c6c696c50)
- [Git convention](https://legend-mozzarella-452.notion.site/Git-Convention-a0ffd17bd8334ce487082311783f1e1d)

<br>
<Hr>

## 😊 Our API Docs

### 👉 [API Docs](https://legend-mozzarella-452.notion.site/API-ca73330fac9b4b198a87397af27f2d0c)

<br>
<Hr>

## 😊 Our functions

| func |     detail      | developer | done |
| :--: | :-------------: | :-------: | :--: |
| user |  유저 생성 API   |  수화     |   ✅  |
|person|   인물 생성 API  |   수화    |  ✅  |
|      |  인물 상세 조회 API|   수화  |  ✅  |
|      |  인물 리스트 조회 API|   민재 |  ✅ |
|      | 인물 정보 변경 API|   민재    |  ✅  |

<br>

## 😊 Our Directory Tree

```bash

└── functions
    ├── 📂constants
    ├── 📂controller
    ├── 📂interface
    ├── 📂prisma
    ├── 📂router
    ├── 📂service
    ├── index.ts
```

<br>

## 😊 Our Dependencies

```json
{
  "name": "seminar4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "@typescript-eslint/eslint-plugin": "^5.43.0",
    "@typescript-eslint/parser": "^5.43.0",
    "eslint": "8.22.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "@types/lodash": "^4.14.189",
    "express": "^4.18.2",
    "lodash": "^4.17.21",
    "prisma": "^4.6.1"
  }
}

```

<br>

## 😊 Our Architecture
<img src="https://user-images.githubusercontent.com/82744423/202871525-96bf7b96-d041-4bea-8bc8-2a3783b7c7ac.png">

<br>
    
## 😊 Our model
   
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model person {
  id        Int     @id @unique @default(autoincrement())
  user_id   Int
  name      String  @db.VarChar(100)
  birth     String? @db.VarChar(100)
  mbti      String? @db.VarChar(10)
  memo      String?
  value     Int
  is_active Boolean @default(true)
  user      user    @relation(fields: [user_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "person_user_id_fk")
}

model user {
  id     Int      @id @default(autoincrement())
  name   String   @db.VarChar(100)
  person person[]
}


```
<br>
    
## 😊 ERD
   
<img width="400" alt="Untitled" src="https://user-images.githubusercontent.com/82744423/202870634-124a1af4-c1cb-4b3e-a61b-b9fecdeb9880.png">


    
