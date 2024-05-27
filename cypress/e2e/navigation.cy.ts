describe('Header navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Navigates to the blog page', () => {
    cy.get('[data-testid="/blog"]').click({ multiple: true });
    cy.url().should('include', '/en/blog');
  });

  it('Navigates to the about us page', () => {
    cy.get('[data-testid="/about-us"]').click({ multiple: true });
    cy.url().should('include', '/en/about-us');
  });

  it('Navigates to the contact page', () => {
    cy.get('[data-testid="/contact"]').click({ multiple: true });
    cy.url().should('include', '/en/contact');
  });

  it('Navigates to the home page', () => {
    cy.get('[data-testid="/"]').click({ multiple: true });
    cy.url().should('include', '/en');
  });
});
