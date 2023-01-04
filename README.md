# websocket-example

## Setup 

### Monorepo

Youtube: [React Nodejs/Express Project Monorepo Setup | FullStack | Yarn Workspaces | Concurrently](https://youtu.be/ACDGXHR_YmI)

```bash
yarn init -y

mkdir server
cd server
yarn init -y

mkdir client
cd client
yarn init -y
```

- Then, add in the root package.json:
    - `workspace` info
    - `private` true

### typescript

```bash
yarn workspace server add -D @types/node typescript nodemon
yarn workspace client add -D @types/node typescript nodemon
```

- Then, add tsconfig in each package

```
# cd [package]
npx tsconfig.json
```

### package.json

For each package:

```json
  "scripts": {
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js",
    "start": "node dist/index.js"
  },
```