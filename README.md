# NEXTJS-TS

- NEXTJS
  - REACTJS FE
  - SSR with knex and mysql connection

## Packages

- next
- react
- react-dom
- knex
- mysql
- clsx

## Concepts

- pull from various hello world and getting started repos
- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
1. Install the packages: ``` pnpm install ```
1. Create a _.env_ file based on _.env.sample_
    - that references your already created mysql database.
    - > _there are many ways to install mysql and I am using my instance from my
      https://www.apachefriends.org/ XXAMP install which I use for PHP development._
1. Create Tables and Seed your database with knex
    - ``` pnpm migrate ```
    - ``` pnpm seed ```
1. Run the development server: ``` pnpm dev ```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
