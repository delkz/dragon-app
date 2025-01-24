# Sobre o projeto
A aplicação foi desenvolvida utilizando as seguintes tecnologias: React, Next.js, Axios, React Hook Form, React Hot Toast, Motion para animações e Supabase para autenticação.

O sistema permite que usuários autenticados consumam dados de uma API específica, possibilitando a manipulação e visualização dessas informações de forma eficiente e intuitiva.

## Funcionalidades

- Autenticação de usuários com Supabase
- Consumo de dados de uma API específica
- Manipulação e visualização de informações
- Animações com Motion
- Notificações com React Hot Toast
- Formulários com React Hook Form
- Testes unitarios com JEST

## Como executar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/delkz/dragon-app
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd dragon-app
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute o projeto:
    ```bash
    npm run dev
    ```

O aplicativo estará disponível em `http://localhost:3000`.

## Configuração do arquivo `.env.local`

Para que a aplicação funcione corretamente, é necessário configurar as variáveis de ambiente no arquivo `.env.local`. Este arquivo deve ser criado na raiz do projeto e deve conter as seguintes variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Substitua `your-supabase-url` e `your-supabase-anon-key` pelos valores fornecidos pelo Supabase.

Essas variáveis são utilizadas para configurar a conexão com o Supabase, permitindo a autenticação de usuários e o consumo de dados da API.