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

- Now you can add package to any workspace from root. E.g:

```bash
yarn workspace server add express
```

### typescript

```bash
yarn add -DW @types/node typescript
```