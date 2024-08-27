Cypress.Commands.add("login", (username, password) => {
  cy.log("Starting the login process for", username); // Log message
  cy.get("#input-email").type(username);
  cy.get("#input-password").type(password);
  cy.get('input[type="submit"]').click();
  cy.log("Login submitted"); // Log message
});
describe("login lambdatest playground", () => {
  it("should successfully log in with valid credentials'", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.login("umavictor11@gmail.com", "ulgfiygfiuwef");
  });
});
