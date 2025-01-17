// Classe referente aos testes da atividadePratica, essa classe tem como função auxiliar no reaproveitamento e encapsulamento de código que será usado nos testes da atividadePratica

class atividadePraticaModule {
  visitLandingPage() {
    cy.visit('https://picpay.com/');
  }

  preenchendoCadastro(cpf) {
    cy.get('#CPF').type(cpf);
    cy.get('#Nome').type("Atividade Pavani");
    cy.get('#E-mail').type("Atividade@Pavani.com");
    cy.get('#Celular').type("11912345678");
    cy.get('[placeholder="Data de nascimento*"]').type("01011991");
    cy.get('[role="checkbox"]').click();
    cy.get('[role="checkbox"]').should('have.attr', 'aria-checked', 'true');
  }

  logando(username, senha) {
    cy.get('[name="username"][inputmode="numeric"]').type(username);
    cy.get('[name="password"][inputmode="numeric"]').type(senha);
    cy.get('button[type="submit"]').click();
  }
}

export default new atividadePraticaModule();
