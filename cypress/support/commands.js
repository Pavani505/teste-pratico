// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Adicionando comando para unificar selecao de elemento indepentende se é um CSS selector ou um xpath
Cypress.Commands.add('pickElement', (element) => {
    if (element.includes('//')) {
        return cy.xpath(element);
    } else { 
        return cy.get(element);
    }
});


/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
