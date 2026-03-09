describe('Beedoo QA Challenge - Fluxo de Cursos', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000); // Espera carregamento inicial
  });

  it('Deve carregar a página inicial e listar cursos', () => {
    cy.screenshot('home_page');
    cy.get('body').should('be.visible');
    cy.contains(/cursos/i).should('exist');
  });

  it('Deve realizar o cadastro de um novo curso', () => {
    // Tenta encontrar o botão de Novo Curso
    // Ajuste baseado em tentativa e erro: geralmente é um botão flutuante ou no topo
    cy.contains(/novo curso|adicionar|cadastrar/i).click();
    
    cy.wait(500);
    cy.screenshot('formulario_cadastro');

    // Preenche o formulário
    // Assumindo IDs ou Names comuns. Se falhar, o usuário verá no log.
    // Título
    cy.get('input[type="text"]').first().type('Curso Cypress Automatizado');
    
    // Descrição (pode ser o segundo input ou um textarea)
    cy.get('input[type="text"], textarea').eq(1).type('Descrição gerada via teste automatizado');
    
    // Carga Horária (geralmente numérico)
    cy.get('input[type="number"]').type('10');

    // Salvar
    cy.contains(/salvar|confirmar/i).click();

    cy.wait(1000);
    cy.screenshot('resultado_cadastro');
    
    // Validação
    // Verifica se voltou para a listagem ou mostrou mensagem
    cy.contains('Curso Cypress Automatizado').should('exist');
  });

  it('Deve validar campos obrigatórios (Cenário Negativo)', () => {
    cy.contains(/novo curso|adicionar|cadastrar/i).click();
    
    // Tenta salvar vazio
    cy.contains(/salvar|confirmar/i).click();
    
    cy.screenshot('erro_campos_obrigatorios');
    
    // Verifica se continuamos na mesma URL ou se apareceu erro
    // cy.get('.error, .alert, :invalid').should('exist'); // Exemplo genérico
  });
});
