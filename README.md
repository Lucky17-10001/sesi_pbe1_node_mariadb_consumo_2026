# Backend – Gestão de Consumo de Energia

## Descrição
Backend desenvolvido em Node.js e MariaDB para registrar equipamentos e locais, acompanhar o consumo de energia elétrica e identificar possíveis desperdícios.

O sistema permite cadastrar usuários, realizar login, registrar consumos de energia, consultar equipamentos e locais, atualizar e excluir registros e calcular a média de consumo em kWh.

## Diagrama de Classes

![Diagrama de Classes](backend_energia/docs/dc_energia.png)

## Tecnologias utilizadas
- Node.js
- Express
- MariaDB
- MySQL2
- JavaScript
- Insomnia
- Draw.io

## Instalação e execução

1. Instale as dependências:
   `npm install`

2. Execute o script `db/script.sql` no MariaDB.

3. Inicie o servidor:
   `node server.js`

4. A API estará disponível em:
   `http://localhost:3000`

## Rotas da API

### Usuários
- POST `/usuarios` – Cadastrar usuário.
- GET `/usuarios` – Listar usuários.
- GET `/usuarios/:id` – Buscar usuário por ID.
- PUT `/usuarios/:id` – Atualizar usuário.
- DELETE `/usuarios/:id` – Excluir usuário.
- POST `/login` – Realizar login.

### Consumo
- POST `/consumo` – Cadastrar consumo.
- GET `/consumo` – Listar consumos.
- GET `/consumo/:id` – Buscar consumo por ID.
- PUT `/consumo/:id` – Atualizar consumo.
- DELETE `/consumo/:id` – Excluir consumo.
- GET `/consumo/media` – Calcular média de consumo em kWh.

## Testes realizados no Insomnia

### Usuários

1. Cadastrar usuário

![Cadastrar usuário](backend_energia/docs/prints/cadastrar_usuario.png)

2. Listar usuários

![Listar usuários](backend_energia/docs/prints/listar_usuarios.png)

3. Buscar usuário

![Buscar usuário](backend_energia/docs/prints/buscar_usuario.png)

4. Atualizar usuário

![Atualizar usuário](backend_energia/docs/prints/atualizar_usuario.png)

5. Login

![Login](backend_energia/docs/prints/login.png)

6. Excluir usuário

![Excluir usuário](backend_energia/docs/prints/excluir_usuario.png)

### Consumo

7. Cadastrar consumo

![Cadastrar consumo](backend_energia/docs/prints/cadastrar_consumo.png)

8. Listar consumos

![Listar consumos](backend_energia/docs/prints/listar_consumos.png)

9. Buscar consumo

![Buscar consumo](backend_energia/docs/prints/buscar_consumo.png)

10. Atualizar consumo

![Atualizar consumo](backend_energia/docs/prints/atualizar_consumo.png)

11. Verificar atualização

![Verificar atualização](backend_energia/docs/prints/verificar_atualizacao_consumo.png)

12. Média de consumo

![Média de consumo](backend_energia/docs/prints/media_consumo.png)

13. Excluir consumo

![Excluir consumo](backend_energia/docs/prints/excluir_consumo.png)

## Requisitos funcionais

- RF001 – CRUD de usuários.
- RF002 – Login.
- RF003 – CRUD de consumo.
- RF004 – Resumo contendo a média de consumo de energia em kWh.

## Autor
Projeto acadêmico desenvolvido como atividade de Programação Back-End.
