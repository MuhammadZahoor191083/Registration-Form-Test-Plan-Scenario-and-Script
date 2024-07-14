describe('Registration Form Tests', () => {
    beforeEach(() => {
      cy.visit('http://xyz.com/registration-form')
    });
  
    it('Should submit the form with valid information', () => {
      cy.get('input[name="fullName"]').type('xyz');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('input[name="confirmPassword"]').type('Password123');
      cy.get('input[name="dob"]').type('2001-05-15');
      cy.get('select[name="gender"]').select('Male');
      cy.get('input[name="newsletter"][value="Yes"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.contains('Registration successful').should('be.visible');
    });
  
    it('Should subscribe to the newsletter', () => {
      cy.get('input[name="fullName"]').type('xyz');
      cy.get('input[name="email"]').type('abc@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('input[name="confirmPassword"]').type('Password123');
      cy.get('input[name="dob"]').type('2001-05-15');
      cy.get('select[name="gender"]').select('Male');
      cy.get('input[name="newsletter"][value="Yes"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.contains('Registration successful').should('be.visible');
    });
  });
  