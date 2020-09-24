![banner](https://user-images.githubusercontent.com/30129295/89829682-5db14300-db31-11ea-904e-7c1024d0cd2e.png)

## Em desenvolvimento 🧱🔨

----------------------------------

![Generic badge](https://img.shields.io/badge/Versão-1.0.0-green.svg)


[![Generic badge](https://img.shields.io/badge/ReactJS-16.13.1-Blue.svg)]() [![Generic badge](https://img.shields.io/badge/Jest-4.2.4-green.svg)]()


## 📝Sumário

- [Descrição](#📖Descrição)
- [Instalação](#📦Instalação)
- [Severino](#💪Severino)
- [Estrutura](#🚧Estrutura)
- [Test](#💣Test)

##
## 📖Descrição

Este repositório é um boilerplate com uma arquitetura completa para iniciar aplicações do zero. Construído com ***ReactJS*** e ***Typescript***. ❤

##
## 🙋‍♂Severino

Esse reposítório é compatível com a biblioteca **SEVERINO**.

Serverino é uma biblioteca CLI (command-line interface) escrita em NodeJS. Sendo um gerador de código para projetos em ReactJS com Typescript.

Link do repositório [Severino](https://github.com/ThompsonMss/severino)

##
## 📦Instalação

Siga os comandos abaixo para instalar essa aplicação em sua máquina.

```bash
# Clonando o repositório da aplicação.
git clone https://github.com/ThompsonMss/boilerplate-reactjs-typescript.git
```

```bash
# Entrando na pasta da aplicação.
cd boilerplate-reactjs-typescript.git
```

```bash
# Comando para instalar os pacotes necessários da aplicação.
npm i
```

```bash
# Comando para rodar a aplicação.
npm run start
```

```bash
# Comando para rodar os testes da aplicação.
npm run test
```

##
## 🚧Estrutura

Projeto consiste na seguinte estrutura:

- src/
  - \_layouts
  - components
  - config
  - helpers
  - pages
  - remote
  - routes
    - private
    - public
  - services
  - store
  - styles
  - validate

### /\_layouts
##
> Contém todos os layouts padrões que serão utilizados em toda a aplicação, encapsulando as páginas (/pages).

```javascript
  //Layout Auth
  import React from "react";
  import { Container } from "./styles";

  const Auth: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
  };

  export default Auth;
```

### /components
##
> Contém todos os componentes, que serão reutilizados no desenvolvimento da aplicação.

### /config
##
> Configurações gerais para o funcionamento da aplicação (plugins e etc).

### /helpers
##
> São funções que fornecem uma solução para um certo problema e que podem ser reutilizadas em toda a aplicação.

### /pages
##
> Contém as páginas utilizadas na aplicação (Login, cadastro de fornecedor e etc).

### /remote
##
> São funções responsáveis por realizar as requisições na API do Financeiro Dedicado ou de terceiros.

### /routes
##
> Contém todas as rotas da aplicação (/login, /cadastrar-fornecedor e etc).

### /routes/public
##
> Contém todas as rotas da aplicação que são públicas.

### /routes/private
##
> Contém todas as rotas da aplicação que são privadas.

### /services
##
> Contém funções que carrega serviços de terceiros (http-client, history browser e etc).

### /store
##
> Contém toda a estrutura do redux.

### /styles
##
> Contém os estilos global da aplicação.

### /validate
##
> Contém funções que realiza a validação de dados (Formulários e etc).

##
## 💣Test

Em breve.