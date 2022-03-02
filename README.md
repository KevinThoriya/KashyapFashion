## Getting Started

First, run the development server:

```bash
npm i
npm run dev

for build

npm run build
npm run start

# or
yarn
yarn run dev

for build

yarn run build
yarn run start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


node set up 
goto backend 2 

change the database config -> src/config/databaseConfig.js

terminal 
```
yarn install
createdb KashyapFashion 
sequelize db:migrate:status
sequelize db:migrate
sequelize db:seed:all
yarn run dev
```