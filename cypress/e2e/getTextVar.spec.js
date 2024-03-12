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

describe("Shop Menu Navigation", () => {
  it("successfully navigates to Accessories from Shop menu", () => {
    // Step 1: Visit the Ecommerce Playground
    cy.visit("https://ecommerce-playground.lambdatest.io/");

    // Step 2: Hover over the "Mega menu" dropdown

    cy.get("li").contains("Menu").invoke("show");

    // Step 3: Click on the "Apple" category within the dropdown
    cy.get("ul.mega-menu-content").contains("Apple").click({ force: true });

    // Optional: Assert that the URL is correct after clicking "Apple"
    cy.url().should("include", "product/manufacturer");
  });
});