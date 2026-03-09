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
Acesse a planilha completa com os cenários e casos de teste no link abaixo:

👉 **[Google Sheets - Cenários de Teste Beedoo QA](https://docs.google.com/spreadsheets/d/1IWNYsbaibgFbZ66wXe6q4ZB8AvAmyuE52Iuuy8rm6ck/edit?usp=sharing)**

> **Backup**: Os cenários também estão disponíveis neste repositório em formato [Markdown (CENARIOS.md)](CENARIOS.md) e [CSV (CENARIOS_DE_TESTE.csv)](CENARIOS_DE_TESTE.csv).

### 📂 Evidências de Execução
As evidências de execução dos testes (prints e vídeos) estão disponíveis no Google Drive:

👉 **[Google Drive - Evidências de Teste](https://drive.google.com/drive/folders/1bcNt1JwPEjFdSKrItkS7eqQD9Ao2XTtf?usp=sharing)**

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

Durante a execução dos testes exploratórios e automatizados, foram identificadas diversas falhas críticas que comprometem a qualidade e a usabilidade da aplicação.

| ID | Título do Bug | Severidade | Status |
|----|---------------|------------|--------|
| BUG-001 | Falha na Exclusão de Cursos | Crítica | Aberto |
| BUG-002 | Cadastro de Curso com campos vazios | Alta | Aberto |
| BUG-003 | Aceite de valores negativos em campos numéricos | Média | Aberto |
| BUG-004 | Ausência de validação de formato de URL | Média | Aberto |
| BUG-005 | Problemas de Responsividade em dispositivos móveis | Baixa | Aberto |

### Detalhes dos Bugs

#### BUG-001: Falha na Exclusão de Cursos
*   **Descrição**: Ao tentar excluir um curso da listagem, a ação não é concluída ou o curso retorna após atualização.
*   **Passos para reproduzir**:
    1. Acessar a listagem de cursos.
    2. Identificar um curso existente.
    3. Clicar no botão/ícone de "Excluir".
    4. Confirmar a ação (se houver modal).
    5. Atualizar a página (F5).
*   **Resultado Atual**: O curso permanece na lista ou o botão de exclusão não dispara nenhuma ação.
*   **Resultado Esperado**: O curso deveria ser removido permanentemente da base de dados e da visualização.
*   **Severidade**: Crítica (Impede o gerenciamento do ciclo de vida dos dados).

#### BUG-002: Cadastro de Curso com campos vazios
*   **Descrição**: O sistema permite cadastrar cursos sem preencher campos obrigatórios como Título ou Descrição.
*   **Passos para reproduzir**:
    1. Acessar a tela de cadastro (`/new-course`).
    2. Deixar todos os campos em branco.
    3. Clicar em "Salvar".
*   **Resultado Atual**: O sistema cria um registro "vazio" na listagem ou recarrega sem erro.
*   **Resultado Esperado**: O sistema deve impedir o envio e exibir mensagens de validação ("Campo obrigatório") abaixo de cada input.
*   **Severidade**: Alta (Compromete a integridade da base de dados).

#### BUG-003: Aceite de valores negativos em campos numéricos
*   **Descrição**: Campos como "Carga Horária" ou "Quantidade de Participantes" aceitam valores negativos.
*   **Passos para reproduzir**:
    1. No cadastro, preencher "Carga Horária" com `-10`.
    2. Salvar o curso.
*   **Resultado Atual**: O curso é salvo com carga horária negativa.
*   **Resultado Esperado**: O campo deve aceitar apenas números inteiros positivos ou exibir erro de validação.
*   **Severidade**: Média (Dados inconsistentes com a realidade).

#### BUG-004: Ausência de validação de formato de URL
*   **Descrição**: O campo de Link/URL do curso aceita texto comum ou formatos inválidos.
*   **Passos para reproduzir**:
    1. No campo de "Link do Curso", digitar "texto aleatorio" (sem http/https).
    2. Salvar.
*   **Resultado Atual**: O sistema aceita o texto. Ao clicar no link na listagem, ocorre erro 404 ou comportamento inesperado.
*   **Resultado Esperado**: O campo deve validar o formato de URL (regex) ou o tipo do input deve ser `url`.
*   **Severidade**: Média.

#### BUG-005: Problemas de Responsividade
*   **Descrição**: A interface quebra ou elementos se sobrepõem em telas menores (mobile).
*   **Evidência**: Visualização em modo de inspeção (F12) com resolução 375x667 (iPhone SE).
*   **Resultado Atual**: Botões de ação ficam inacessíveis ou tabela de listagem cria barra de rolagem horizontal excessiva.
*   **Resultado Esperado**: O layout deve se adaptar (Grid/Flexbox) para visualização vertical em mobile.
*   **Severidade**: Baixa (Afeta usabilidade em dispositivos específicos).
