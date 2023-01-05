# websocket-example

---

## Setup 

### Monorepo

page: [Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
Youtube: [React Nodejs/Express Project Monorepo Setup | FullStack | Yarn Workspaces | Concurrently](https://youtu.be/ACDGXHR_YmI)
Github: [Modern Monorepo Boilerplate](https://github.com/michaljach/modern-monorepo-boilerplate)

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

# OR tsc --init
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

---

Run

1\. Install

```bash
yarn
```

2\. Build

```bash
yarn workspace server build
yarn workspace client build
```

3\. Run. Open 2 different terminals

```bash
yarn workspace server start
```

```bash
yarn workspace client start
```