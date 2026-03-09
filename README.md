# DESAFIO-QA-BEEDOO-2026

Este repositório contém a documentação e os artefatos de teste para o desafio de QA da Beedoo.

## 1. Análise da Aplicação

### Objetivo da Aplicação
A aplicação tem como objetivo principal gerenciar o catálogo de cursos de uma plataforma educacional, permitindo o cadastro de novos cursos e a visualização da listagem dos cursos já existentes. Ela serve como uma ferramenta administrativa simples para manter a base de conhecimento atualizada.

### Principais Fluxos Identificados
1.  **Listagem de Cursos**: Visualização de todos os cursos cadastrados com suas respectivas informações (Título, Descrição, Carga Horária, etc.).
2.  **Cadastro de Curso**: Formulário para inserção de um novo curso na base de dados.
3.  **Busca/Filtro** (Se disponível): Localização de cursos específicos na listagem.

### Pontos Críticos para Teste
*   **Validação de Campos Obrigatórios**: Garantir que cursos não sejam criados sem informações essenciais (ex: Título, Carga Horária).
*   **Integridade dos Dados**: Verificar se os dados salvos são exibidos corretamente na listagem (ex: caracteres especiais, formatação de valores).
*   **Tratamento de Erros**: Comportamento da aplicação ao tentar cadastrar dados inválidos ou duplicados.
*   **Usabilidade**: Facilidade de navegação entre a listagem e o cadastro.

---

## 2. Estratégia de Testes

### Decisões Tomadas
*   **Foco em Funcionalidade e Usabilidade**: Priorizei testes que cobrem o "Caminho Feliz" (Happy Path) para garantir o funcionamento básico, seguidos de testes negativos e exploratórios para identificar falhas de validação.
*   **Formato dos Testes**: Utilizei o formato Gherkin (Dado/Quando/Então) para os cenários, pois facilita a leitura e o entendimento tanto por técnicos quanto por stakeholders não-técnicos.
*   **Massa de Dados**: Planejei o uso de dados variados (textos longos, caracteres especiais, campos vazios) para testar a robustez do formulário.

### Ferramentas Utilizadas
*   **Criação de Cenários**: Planilhas (Google Sheets) e Markdown.
*   **Evidências**: Capturas de tela (Screenshots) e/ou gravação de tela.
*   **IA como Apoio**: Utilizei IA para gerar sugestões de cenários de borda e estruturar a documentação inicial, validando e adaptando as sugestões para o contexto específico da aplicação.

---

## 3. Artefatos de Teste

### 📄 Planilha de Cenários e Casos de Teste
[INSIRA AQUI O LINK DA SUA PLANILHA NO GOOGLE SHEETS]

> **Nota**: Um arquivo `CENARIOS_DE_TESTE.csv` foi gerado neste repositório para facilitar a importação para o Google Sheets.

### 📂 Evidências de Execução
[INSIRA AQUI O LINK DA SUA PASTA NO GOOGLE DRIVE]

---

## 4. Automação de Testes (Cypress)

Para garantir a qualidade contínua e facilitar a execução repetitiva dos testes, foi implementada uma suíte de testes automatizados utilizando **Cypress**.

### Estrutura do Projeto de Automação
*   `cypress/e2e/beedoo.cy.js`: Contém os scripts de teste para os fluxos de Cadastro e Listagem.
*   `cypress.config.js`: Configurações do Cypress (Base URL, Vídeo, Screenshots).

### Como Executar os Testes Automatizados

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  **Instalação**: No terminal, na raiz do projeto, execute:
    ```bash
    npm install
    ```
3.  **Execução (Modo Headless)**: Para rodar os testes e gerar vídeos/screenshots:
    ```bash
    npm test
    ```
4.  **Execução (Modo Interativo)**: Para ver os testes rodando em tempo real:
    ```bash
    npm run test:open
    ```

### Evidências Geradas Automaticamente
Após a execução, o Cypress gera automaticamente:
*   **Vídeos**: Na pasta `cypress/videos`.
*   **Screenshots**: Na pasta `cypress/screenshots` (em caso de falha ou quando solicitado no script).

---

## 5. Relatório de Bugs Encontrados

| ID | Título do Bug | Severidade | Status |
|----|---------------|------------|--------|
| BUG-001 | [Exemplo] Erro ao cadastrar curso com título vazio | Alta | Aberto |

### Detalhes dos Bugs

#### BUG-001: [Título do Bug]
*   **Passos para reproduzir**:
    1. Acessar a tela de cadastro.
    2. Deixar o campo "Título" vazio.
    3. Preencher os demais campos.
    4. Clicar em "Salvar".
*   **Resultado Atual**: O sistema não exibe mensagem de erro e recarrega a página.
*   **Resultado Esperado**: O sistema deve exibir a mensagem "O campo Título é obrigatório".
*   **Severidade**: Alta
*   **Evidência**: [Link ou Imagem]

*(Adicione novos bugs seguindo este modelo)*
