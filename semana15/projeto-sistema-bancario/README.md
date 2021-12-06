# SISTEMA BANCÁRIO

### Requisitos Mínimos

O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

1. Crie um **tipo** para representar uma conta para o usuário
2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
5. Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe com as validações descritas nas funcionalidades.
6. Crie um método `GET` na entidade `users`: essa função será responsável por pegar todos os usuários existentes no array de usuários.
7. Adicione uma validação ao item 1 (Criar conta): o usuário deve ser maior de idade para conseguir se cadastrar. Caso seja menor de idade, exiba uma mensagem de erro.