Cypress.Commands.add("logTrendingCategories", () => {
  cy.get(".product-thumb h4 a").each(($el, index) => {
    const categoryName = $el.text();
    // Log each category to the console
    console.log(`Trending Category ${index + 1}: ${categoryName}`);
  });
});

describe("Log Top Trending Categories", () => {
  it("should log all top trending categories to the console", () => {
    // Visit the homepage
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
    // Use the custom command to log trending categories
    cy.logTrendingCategories();
  });
});
