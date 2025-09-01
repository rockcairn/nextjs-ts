# NEXTJS-TS

- NEXTJS
  - REACTJS FE
  - SSR with knex and postgres connections

## Packages

- next
- react
- react-dom
- knex
- pg
- clsx
- tailwindcss
- @vis.gl/react-google-maps
- yet-another-react-lightbox

## Concepts

- Pulled from various hello world and getting started repos
- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- Replatformed site for [rockcairn.com](http://rockcairn.com) which was previously a php site

| Home Page  | Peaks Page | Map Page   |
| ---------- | ---------- | ---------- |
| ![Home Page](/public/documentation/home-page.jpg) | ![Peaks Page](/public/documentation/peaks-page.jpg) | ![Map Page](/public/documentation/map-page.jpg) |

## Getting Started
1. Install the packages: ``` pnpm install ```
1. Install a postgres database
```
brew install postgresql
brew services start postgresql
psql -U <username> -w <database>
```
- for macos if you don't setup a user its just your macos user name without password
```
psql postgres
> CREATE DATABASE <databasename>;
```
1. Create a _.env_  and _.env.local_ file based on _.env.sample_
    - that references your already created postgres database.
    - Also add your google api maps key _GOOGLE_MAPS_API_KEY_
1. Create Tables and Seed your database with knex
    - ``` pnpm migrate ```
    - ``` pnpm seed ```
1. Adjust the _package.json_ scripts:dev tag to match your desired ```-hostname``` and ```-p``` port
1. Run the development server: ``` pnpm dev ```
1. Open [http://rockcairn.localhost.com:3000](http://rockcairn.localhost.com:3000) with your browser to see the results
    1. Adjust the url for your hostname and port choices in your _package.json_ file

## Learn More

To learn more take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Google Maps Lab](https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js) - with vis.gl/react-google-maps
- [React Google Maps](https://visgl.github.io/react-google-maps/) - vis.gl/react-google-maps github repo
- [Vercel Next.js Hosting](https://vercel.com/) - easy hosting of next.js web applications
- [Neon postgres DB](https://neon.com/) - easy cloud postgres db connection to Vercel


## Copyright
- All images and page content are Copyright &copy; 1999-2025
- Feel free to lift and shift the framework (nextjs, and knexjs)
- "yet-another-react-lightbox" react/node packages used via MIT licensing.
