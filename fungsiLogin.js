const login = function(email, password) {
    cy.visit("/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    };