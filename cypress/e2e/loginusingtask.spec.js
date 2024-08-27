Cypress.Commands.add("customLogin", (username, password) => {
  cy.task("logToFile", `Attempting login with username: ${username}`);
  cy.get("#input-email").type(username);
  cy.get("#input-password").type(password);
  cy.get('input[type="submit"]').click();
  cy.task("logToFile", `Login submitted for username: ${username}`);
});

describe("login lambdatest playground", () => {
  it("should successfully log in with valid credentials'", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.customLogin("umavictor11@gmail.com", "ulgfiygfiuwef");
  });
});
