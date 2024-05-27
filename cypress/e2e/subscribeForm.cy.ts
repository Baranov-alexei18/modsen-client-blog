describe('Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Button disabled when email is invalid', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('Displays success message on successful submission', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
      statusCode: 200,
      body: {},
    }).as('sendEmail');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('button[type="submit"]').click();

    cy.wait('@sendEmail');
    cy.contains('Subscription successful').should('be.visible');
  });

  it('Displays error message on failed submission', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
      statusCode: 500,
      body: {},
    }).as('sendEmail');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('button[type="submit"]').click();

    cy.wait('@sendEmail');
    cy.contains('Subscription failed. Please try again').should('be.visible');
  });
});
