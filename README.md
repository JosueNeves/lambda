# **Lambda**

Este repositório contém o código fonte utilizado no Lambda para a validação do CPF dos clientes que antecede a autenticação na aplicação principal. Atualmente ele está escrito em Node.js 20.x.

## **Estrutura do Repositório**

- **`/`**: Contém arquivos `.mjs`, onde ficam as regras de obtenção e validação do CPF recebido por paramêtro na requisição.

- **`postman/`**: Armazena a collection utilizada no processo de validação da API exposta para acesso à função Lambda.

## **Como Acessar**

### Acessando via Postman

Crie uma nova requisição GET

Cole a url: https://cfs1vs7yfh.execute-api.sa-east-1.amazonaws.com/default/getUserByCPF/83378482001

Onde 83378482001 é um CPF de testes, para essa requisição é necessário um CPF válido, sendo assim, caso exista a necessidade, utilize o gerador de CPF online: https://www.4devs.com.br/gerador_de_cpf

Na aba Authorization, selecione OAuth 2.0 como sendo o método de autenticação e siga preenchendo os dados da seguinte forma:

Grant Type: Authorization Code

Selecione o check: Authorize using browser

Auth URL: https://identity-server-fiap.auth.sa-east-1.amazoncognito.com/oauth2/authorize

Access Token URL: https://identity-server-fiap.auth.sa-east-1.amazoncognito.com/oauth2/token


Clique em - **`New Acess Token"`**

Uma nova tela de login vai abrir em seu navegador default, para realizar seus testes, pode-se criar um usuário novo, ou se preferir, utilize os tokens abaixo que foram criados para um teste rápido:


Client ID: - **`4ra3p0j285l2pf93i7kj4fn75c`**

Client Secret: **`nt8cm09g46jbeftsq60ekd7i5gle0mq01r9j8k69er0dk0dtjk9`**

Ao fazer o login, confirme se o popup não está bloqueado, se estiver, faça o desbloqueio.


Pronto, o Postman vai receber o Token de acesso com a duração de 60 minutos.


## **Contribuições**
Sua contribuição é bem-vinda! Sinta-se à vontade para forkar o repositório, fazer suas alterações e abrir um pull request.


