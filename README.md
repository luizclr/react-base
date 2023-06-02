
[![Netlify Status](https://api.netlify.com/api/v1/badges/3686df98-70c6-43be-bb8b-f5f7b5b238c9/deploy-status)](https://app.netlify.com/sites/react-base/deploys)[![CircleCI](https://dl.circleci.com/status-badge/img/gh/luizclr/react-base/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/luizclr/react-base/tree/main)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

# 🚧 work in progress 🚧

# 🔍 React Base

## 🌐 [react-base.netlify.app/](https://react-base.netlify.app/)

## 📖 Tabe of contents

1. [📋 Requirements](#requirements)
2. [🛠️ Installation and usage](#installation-and-usage)
3. [🗂️ Component Structure (general)](#component-structure-general)
4. [🧑🏻‍💻 Contributing](#contributing)
    - [Branch names](#branch-names)
    - [Commit messages](#commit-messages)

## Requirements

- NodeJs
- npm
- nvm
## Installation and usage

Using `nvm`? change local node version to project's node version on `.nvmrc`.

```shell
nvm install
```

Install dependencies:
```shell
npm install
```

> Create a copy `.env` file from `.env.example` and populate the variables.

Run project on development mode:
```shell
npm run dev
```
> a new browser window will be opened on [localhost:4000](http://localhost:4000).

Run unit tests:
```shell
npm test
```

Build for production:
```shell
npm run build
```

Start server with built code:
```shell
npm start
```

## Component Structure (general)

```
\component
    component.tsx
    component.styles.tsx
    component.container.tsx
    types.ts
```

## Contributing

Follow the next steps to contribute
### Branch names

Name your branch with a meaningful name that represents the changes you have done.

Examples:

```
chore/updating-changelog
fix/user-authentication
feat/add-card
```

### Commit messages

Use the format {type}({scope}): {message}.

Eg: `feat(login): added remember me`.

See [conventional commit guideline](https://www.conventionalcommits.org/en/v1.0.0/).
