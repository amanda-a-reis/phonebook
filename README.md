## Desafio técnico - DavinTI
### Task: Agenda telefônica :phone:

_Desenvolver uma aplicação Web que permita aos usuários registrar e pesquisar contatos em uma lista telefônica. O aplicativo deve incluir uma função de pesquisa para nomes e números de telefone._

**Features**
- [x] Registrar um contato com nome, idade e um ou mais números de telefone possíveis.
- [x] Selecionar um contato para editar suas informações.
- [x] Selecionar um contato para excluí-lo.
- [x] Pesquisar um contato por nome ou número de telefone.
- [x] Gerar um log em um arquivo de texto quando um usuário é excluído.
___

#### Implementação
##### Technologias usadas:
* _Linguagem_: **Typescript**
* _Framework_: **Next.js**
* _Estilo_: **Styled-Components**
* _Testes de unidade_: **Jest**
* _Testes end-to-end_: **Cypress**
* _Continous Integration_: **GitHub Actions**
* _Banco de Dados_: **PostgreSQL**, **Prisma (ORM)**, **Supabase (cloud)**
* _Log_: **Winston**
* _Deploy_: **Vercel**
___

### Deploy

:tada: Para visitar o projeto, basta acessar:  https://phonebook-beige.vercel.app/

___

#### Rodar o projeto localmente

O banco de dados está hospedado na nuvem para eliminar a necessidade de rodar o projeto localmente. 

Toda a configuração foi feita com esse propósito. 

Porém, se for desejável testá-lo no ambiente local, basta seguir os passos, nessa ordem:

**Requisitos**: node.js (versão >= 16.13.2), npx (versão >= 8.1.2), yarn (versão >= 1.22.17)

_Instalar dependências_

Execute o comando:
```bash
yarn install
```

_Banco de Dados_
1. Crie e configure uma conta na nuvem para banco de dados PostgreSQL (recomendo o [Supabase](https://supabase.com/), porque é grátis)
_Informações sobre como configurar, [aqui](https://dev.to/prisma/set-up-a-free-postgresql-database-on-supabase-to-use-with-prisma-3pk6)_

2. Crie um arquivo .env na raiz do projeto e adicione seu link de acesso ao banco à variável **DATABASE_URL**

Ele deve ter o seguinte formato:

```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.ObubJTKrJYcPSkdsWqms.supabase.co:5432/postgres"
```

3. Adicione o schema com o prisma, basta rodar o comando:

```bash
npx prisma db push
```
4. Atualize o prisma client

```bash
npx prisma generate
```

_Rodar em ambiente de desenvolvimento_
1. Crie um arquivo .env.development.local na raiz do projeto para as variáveis de desenvolvimento. Adiciona a seguinte linha:

```
NEXT_PUBLIC_URL=http://localhost:3000/
```

4. Rode em ambiente de desenvolvimento

```bash
yarn run dev
```

### Preview

#### Criar contato

![Criar](./public/doc/create.gif)

#### Editar contato
![Editar](./public/doc/edit.gif)

#### Excluir contato
![Deletar](./public/doc/delete.gif)

#### Pesquisar por nome ou telefone
![Pesquisar](./public/doc/search.gif)

#### Gerar log ao deletar
![Log](./public/doc/log.gif)

___

#### Testes
##### Testes de unidade

Esses testes foram responsáveis por testar unitariamente as funções de validação do que foi fornecido pelo usuário (nome, idade, telefones) e também a função que faz a pesquisa.

![TestesUnidade](./public/doc/unit-tests.gif)

* Para rodar os testes de unidade localmente, rode o comando:

```bash
yarn run test:ci
```

#### Testes end-to-end

Esses testes verificam um fluxo usual de interação do usuário com a aplicação, validando as features que foram pedidas.

* Fluxo de criação, edição e deletar

![01](./public/doc/e2e-1.gif)

* Pesquisa por nome e telefone

![02](./public/doc/e2e-2.gif)

* Valida os dados fornecidos pelo usuário

![03](./public/doc/e2e-3.gif)

* Para rodar os testes end-to-end localmente, rode o comando:

```bash
yarn run cypress
```

___

#### Validações

Um recurso adicional que foi implementado, são algumas validações.

1. Verifica se algum campo está vazio
2. Verifica se no campo de nomes há somente letras
3. Verifica se a idade é minimamente válida
4. Verifica cada um dos números de telefone fornecidos (tem que ter 10 ou 11 dígitos, seguindo o esquema (DDD) 9 9999 9999)

_Em caso de dado inválido, uma mensagem vermelha é mostrada (em inglês)_

![Erro](./public/doc/error.png)

___

#### Design

* O site está responsivo e adaptável para dispositivos pequenos.

![Responsividade](./public/doc/responsive.gif)

* Para ver o projeto do Figma no qual o design foi inspirado, acesse:

[Figma - Inspiração de design](https://www.figma.com/community/file/1222456552811965668/(FREE)-Contact-Page-Admin-Dashboard)

* Os estilos dos components foram feitos utilizando styled-components (CSS-in-JS), e estão separados por tipo no diretório:

```
components/styled
```
___

#### Logs

* Os logs quando algum usuário é deletado também estão salvos na nuvem, para ver, acesse: https://phonebook-beige.vercel.app/api/contacts/log
___ 

#### Sobre o código

* Testes de unidade estão no diretório:
```
__tests__
```

* Testes end-to-end estão no diretório:
```
cypress/e2e
```

* Os schemas do prisma para criação das tabelas no banco de dados estão no arquivo:
```
prisma/schema.prisma
```

* Os métodos da API (Next) podem ser encotrados em:
```
pages/api/contacts
```
* Os métodos auxiliares, usados para requisição (axios), filtro, validação e log, estão em:
```
util
```
___

#### Lint 

_Esse projeto utiliza **Eslint standard with typescript**_

___

#### _Todas as ferramentas usadas são open-source, então, muito obrigada à comunidade_ :heart:

_Esse projeto está aberto para correções e melhorias_

