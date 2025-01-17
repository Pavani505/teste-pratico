import atividadePraticaModule from './modules/atividadePraticaModule';

describe('Validando cenario do desafio pratico', () => {
  beforeEach(() => {
    // Acessando LandingPage
    atividadePraticaModule.visitLandingPage();

    // Aceitando popUp de aviso de privacidade para não impactar no teste
    cy.get('#onetrust-accept-btn-handler', { timeout: 5000 }).should('be.visible').then($button => {
      if ($button.is(':visible')) {
        // Se o botão estiver visível, clique nele
        cy.wrap($button).click();
      }
    });
  });

  // Validando cenario com cpf invalido pois o teste esta sendo realizado no ambiente de produção
  it('Preenche formulario de cadastro, com cpf invalido', () => {
    // Adicionando um CPF para abrir conta e acessar o formulario de cadastro
    cy.get('#picpay-lp-parent-cpf-value').type("00000000000");
    cy.get('.sc-1k884s8-1 > .sc-1k884s8-0 > .sc-y3250c-0').click();

    // Preenchendo formulario de cadastro
    atividadePraticaModule.preenchendoCadastro('00000000000');

    // Validando tentativa de cadastro com cpf invalido
    cy.get('button[type="submit"][form="leads-form"]').click();
    cy.get('#CPF').parent().contains('CPF inválido').should('be.visible');
  });

   // Validando cenario com cpf invalido pois o teste esta sendo realizado no ambiente de produção
  it('Loga com cpf invalido', () => {
    // Ir para tela de área do cliente (login)
    cy.contains('Área do cliente').click();
    cy.contains('Acesse sua conta').should('be.visible');
    atividadePraticaModule.logando('00000000000', '123456');

    // Valida cpf invalido ao tentar logar
    cy.contains('Opa! Digite seu CPF corretamente.').should('be.visible');
  });
});
