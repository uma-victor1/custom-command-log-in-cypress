describe("test for storing text", () => {
  it("should get text and save", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    // Get the text of h3 header element using its data-title attribute
    cy.get("h3[class=module-title]").invoke("text").as("textval");
  });

  it("should verify text", function () {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.log("print this value out", this.textval);
    cy.get("h3[class=module-title]").should("have.text", this.textval);
  });
});