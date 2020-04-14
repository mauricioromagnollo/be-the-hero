
<p align="center">
  <img src="https://user-images.githubusercontent.com/38081852/78078006-cddbdb00-737f-11ea-92d9-210692d7803f.png">
  <br>
  <br>
  <img width="460" height="300" src="https://user-images.githubusercontent.com/38081852/78078036-d92f0680-737f-11ea-9354-a4e4487c319e.png">
</p>

![GitHub issues][github_issues_badge] ![GitHub][repository_license_badge] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge]

**Be The Hero** é um projeto Open Source desenvolvido utilizando **NodeJS**, **React** e **React Native** na **Semana OmniStack 11.0** realizada pela [Rocketseat][rocketseat_site] e ministrado pelo CTO [Diego Fernandes][diego_github]. 

## **:rocket: Objetivo**

O objetivo do projeto é permitir que ONGs sem fins-lucrativos possam anúnciar os seus casos em que necessitam de ajuda, e qualquer pessoa disposta a ajudar (**Ser o Herói**), possa entrar em contato e auxiliar a solucionar. 

## **:computer: Tecnologias**

#### FrontEnd (**[React](https://reactjs.org/)**)
  
  - HTTP Client: [axios](https://github.com/axios/axios)
  - Ícones: [react-icons](https://react-icons.netlify.com/#/)
  - Navegador de Telas: [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
  - Variáveis de Ambiente: [cross-env](https://github.com/kentcdodds/cross-env)

  \* Veja o arquivo [package.json](./src/frontend/package.json)

#### BackEnd (**[NodeJS](https://nodejs.org/en/)**)
  - Validação: [celebrate](https://github.com/arb/celebrate) | [joi](https://hapi.dev/module/joi/)
  - Connect Middleware: [cors](https://expressjs.com/en/resources/middleware/cors.html)
  - Variáveis de Ambiente: [dotenv](https://www.npmjs.com/package/dotenv) | [cross-env](https://github.com/kentcdodds/cross-env)
  - Web Framework: [Express](https://expressjs.com/)
  - ORM: [KnexJS](http://knexjs.org/)
  - Reload Monitor: [Nodemon](https://nodemon.io/)
  - Testes: [Jest](https://jestjs.io/) | [supertest](https://github.com/visionmedia/supertest)
  
  \* Veja o arquivo [package.json](./src/backend/package.json)
  
#### Mobile (**[React Native](https://reactnative.dev/)**)
  - Navegação: [React Navigation Native](https://reactnavigation.org/docs/getting-started/)
  - HTTP Client: [axios](https://github.com/axios/axios)
  - Build App: [expo](https://expo.io/)
  - Gerenciador de E-mail: [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
  - API de Internacionalização: [Intl](https://github.com/andyearnshaw/Intl.js/)
  - Compiler: [Babel](https://babeljs.io/)

  \* Veja o arquivo [package.json](./src/mobile/package.json)

#### Banco de Dados (**[SQLite](https://www.sqlite.org/index.html)**)
  - Driver: [SQLite3](https://github.com/mapbox/node-sqlite3)

#### Ferramentas Auxiliares
  - Ícones: [Feather Icons](https://feathericons.com/)
  - Teste de API: [Insomnia](https://insomnia.rest/)
  - Protótipo: [Figma](https://www.figma.com/)
  - Todo-List: [Notion.so](https://www.notion.so/)
  - Editor: [Visual Studio Code](https://code.visualstudio.com/)

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<!-- Links References -->

[rocketseat_site]: https://rocketseat.com.br/

[diego_github]: https://github.com/diego3g

<!-- Badges References -->

[github_issues_badge]: https://img.shields.io/github/issues/x0n4d0/be-the-hero?color=green

[repository_license_badge]: https://img.shields.io/github/license/x0n4d0/be-the-hero

[node_version_badge]: https://img.shields.io/badge/node-12.16.1-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.13.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important
