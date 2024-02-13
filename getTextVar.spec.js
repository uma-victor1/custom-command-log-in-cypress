let getText;
describe("template spec", () => {
  it("navigates and click stuff", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.get("h3[class=module-title]")
      .contains("Top Collection")
      .then(($value) => {
        getText = $value.text();
      });
  });

  it("prints text value of h3", function () {
    cy.log("print value of h3", getText);
  });
});
