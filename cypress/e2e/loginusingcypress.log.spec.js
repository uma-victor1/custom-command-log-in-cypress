Cypress.Commands.add("login", (email, password) => {
  let warningMessage;
  const log = Cypress.log({
    name: "login",
    message: `Logging in as ${email}`,
    consoleProps: () => {
      return {
        email: email,
        password: password,
        message: warningMessage,
      };
    },
  });
  cy.visit(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  cy.get("#input-email").type(email);
  cy.get("#input-password").type(password);
  cy.get('input[type="submit"]').click();
  cy.get(".alert-danger").then(($alert) => {
    if ($alert.length) {
      warningMessage = $alert.text();
      log.end();
    }
  });
});

describe("login lambdatest playground", () => {
  it("should successfully log in with valid credentials'", () => {
    cy.login("umavictor11@gmail.com", "ulgfiygfiuwef");
  });
});
