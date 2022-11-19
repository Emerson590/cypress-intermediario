/// <reference types="Cypress" />

describe('Login', () => {
    it('successfully', () => {
      cy.login()
  
      cy.get('.header-user-avatar').should('exist')
    })
  })
  