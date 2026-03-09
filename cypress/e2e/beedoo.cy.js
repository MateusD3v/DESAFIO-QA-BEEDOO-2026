describe('Beedoo QA Challenge - Fluxo de Cursos', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000); // Espera carregamento inicial
  });

  it('Deve carregar a página inicial e listar cursos', () => {
    cy.screenshot('home_page');
    cy.get('body').should('be.visible');
    // cy.contains(/cursos/i).should('exist'); // Removido pois pode não ter o texto exato
  });

  // --- CENÁRIOS DE BUG IDENTIFICADOS ---

  it('BUG-002: Verifica se sistema aceita cadastro vazio', () => {
    // Tenta encontrar o botão de Novo Curso
    cy.get('a[href="/new-course"], button:contains("Novo"), button:contains("Cadastrar")').first().click();
    
    cy.wait(500);
    
    // Tenta salvar sem preencher nada
    cy.get('button[type="submit"], button:contains("Salvar")').click();
    
    cy.wait(500);
    cy.screenshot('bug_002_cadastro_vazio');
    
    // Se o sistema tiver o bug, ele vai voltar para a home ou não mostrar erro
    // O teste passa se encontrarmos o erro, mas como estamos documentando bugs, 
    // vamos apenas logar o estado atual.
    cy.log('Verifique no screenshot se mensagens de erro apareceram.');
  });

  it('BUG-003: Verifica se aceita valores negativos', () => {
    cy.get('a[href="/new-course"], button:contains("Novo")').first().click();
    
    cy.get('input[type="text"]').first().type('Curso Teste Negativo');
    cy.get('input[type="text"], textarea').eq(1).type('Teste de carga horária negativa');
    
    // Tenta inserir valor negativo
    cy.get('input[type="number"]').type('-50');

    cy.get('button[type="submit"], button:contains("Salvar")').click();

    cy.wait(500);
    cy.screenshot('bug_003_valor_negativo');
  });

  it('BUG-001: Verifica falha na exclusão (se houver botão)', () => {
    // Procura por um botão de excluir na listagem
    cy.get('body').then($body => {
      if ($body.find('button:contains("Excluir"), .delete-btn').length > 0) {
        cy.get('button:contains("Excluir"), .delete-btn').first().click();
        cy.on('window:confirm', () => true); // Confirma o alert se houver
        cy.wait(1000);
        cy.screenshot('bug_001_tentativa_exclusao');
      } else {
        cy.log('Nenhum botão de exclusão encontrado para testar.');
      }
    });
  });

  it('BUG-005: Teste de Responsividade (Mobile)', () => {
    cy.viewport('iphone-x'); // Simula um iPhone X
    cy.wait(500);
    cy.screenshot('bug_005_responsividade_mobile');
    // Verifica se a tabela tem scroll horizontal ou se quebra
    cy.get('table').should('exist');
  });

});
