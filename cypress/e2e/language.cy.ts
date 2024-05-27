describe('Language selection', () => {
  it('Changes language and refreshes page', () => {
    cy.visit('/');

    cy.get('[data-testid="select-language-main"]').should('have.value', 'en');

    cy.get('[data-testid="select-language-main"]').select('Русский').should('have.value', 'ru');

    cy.get('[data-testid="select-language-main"]').should('have.value', 'ru');

    cy.url().should('include', '/ru');

    cy.get('[data-testid="select-language-main"]').select('English').should('have.value', 'en');

    cy.get('[data-testid="select-language-main"]').should('have.value', 'en');

    cy.url().should('include', '/en');
  });
});
