describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/en/contact');
  });

  it('Displays validation errors when required fields are empty', () => {
    cy.get('[data-testid="contact-form-submit"]').click();

    cy.contains('Required').should('be.visible');
  });

  it('Disables submit button when email is invalid', () => {
    cy.get('[data-testid="contact-form-submit"]').click();
    cy.get('[data-testid="contact-form-name"]').type('invalid-name');
    cy.get('[data-testid="contact-form-email"]').type('invalid-email');
    cy.get('[data-testid="contact-form-queryRelated"]').type('invalid-queryRelated');
    cy.get('[data-testid="contact-form-message"]').type('invalid-message');
  });

  it('Displays success message on successful submission', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
      statusCode: 200,
      body: {},
    }).as('sendEmail');

    cy.get('[data-testid="contact-form-name"]').type('John Doe');
    cy.get('[data-testid="contact-form-email"]').type('john@example.com');
    cy.get('[data-testid="contact-form-queryRelated"]').select('support');
    cy.get('[data-testid="contact-form-message"]').type('This is a test message.');

    cy.get('[data-testid="contact-form-submit"]').click();

    cy.wait('@sendEmail');
    cy.contains('Message sent successful').should('be.visible');
  });

  it('Displays error message on failed submission', () => {
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', {
      statusCode: 500,
      body: {},
    }).as('sendEmail');

    cy.get('[data-testid="contact-form-name"]').type('John Doe');
    cy.get('[data-testid="contact-form-email"]').type('john@example.com');
    cy.get('[data-testid="contact-form-queryRelated"]').select('support');
    cy.get('[data-testid="contact-form-message"]').type('This is a test message.');

    cy.get('[data-testid="contact-form-submit"]').click();

    cy.wait('@sendEmail');
    cy.contains('Message sent failed. Please try again').should('be.visible');
  });
});
