![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
![ts](https://badgen.net/badge/npm/v8.3.1/green)
![ts](https://badgen.net/badge/version/1.0.0/orange)

# ControleAlugueis_backend
Backend do projeto de controle de alugueis

## Tecnologias utilizadas
 - Bibliotecas: Express, UUID, tsyringe, typeorm
 - Banco de Dados: PostgreSQL
 - Documentação: Será implementado via Swagger

### Requisitos
 - [X] Deve ser possível cadastrar um imóvel
 - [X] Deve ser possível consultar um imóvel
 - [X] Deve ser possível listar todos os imóveis
 - [X] Deve ser possível excluir um imóvel
 - [X] Deve ser possível cadastrar um inquilino
 - [X] Deve ser possível consultar um inquilino
 - [X] Deve ser possível excluir um inquilino
 - [X] Deve ser possível cadastrar um contrato
 - [X] Deve ser possível consultar um contrato
 - [ ] Deve ser possível alterar um contrato
 - [X] Deve ser possível excluir um contrato
 - [X] Deve ser possível consultar todos os contratos de um inquilino
 - [ ] Deve ser possível copiar um contrato
 - [ ] Deve ser possível incluir um lançamento
 - [ ] Deve ser possível excluir um lançamento
 - [ ] Deve ser possível consultar um lançamento
 - [ ] Deve ser possível consultar todos os lançamentos de um contrato
 - [ ] Deve ser possível consultar todos os lançamentos de um contrato em um período

### Regras de negócio
 - [X] Não deve ser possível cadastrar um imóvel com nome existente
 - [X] Não deve ser possível cadastrar um inquilino com CPF existente
 - [X] Não deve ser possível cadastrar um contrato com imóvel inexistente
 - [X] Não deve ser possível cadastrar um contrato com inquilino inexistente
 - [ ] Não deve ser possível cadastrar mais de um contrato para o mesmo imovel, inquilino e período
 - [ ] Não deve ser possível incluir um lançamento com contrato inexistente

### Observações
 - [ ] Verificar as rotas de busca por ID e Cpf no Inquilino, pois não podem ter duas rotas no mesmo endpoint
 - [ ] Verificar e implementar as FKs dos Contratos
 - [ ] Implementar usuário vinculado ao inquilino que irá consultar apenas os contratos que ele está vinculado
