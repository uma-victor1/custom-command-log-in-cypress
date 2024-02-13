describe('LambdaTest ToDo App',() => {
    it('LambdaTest ToDo App',() => {
    // Go to LambdaTest ToDo App Page
    cy.visit('https://lambdatest.github.io/sample-todo-app/');
    
    // Wait for 5000 ms (i.e. 5 seconds)
    cy.wait(5000)
    
    // Click on web element li1
    cy.get(':nth-child(1) > .ng-pristine').click()
    
    // Click on web element li2
    cy.get('.list-unstyled > :nth-child(2) > .ng-pristine').click()
    
    // Wait for 2000 ms (i.e. 2 seconds)
    cy.wait(2000)
    
    // Add a new item to be added in the text box
    cy.get('#sampletodotext').type('Happy Testing at LambdaTest')
    
    // Add a delay so that the focus can be shifted to the Add Button
    cy.wait(2000)
    
    // Click the Add Button to add the item
    cy.get('#addbutton').click()
    
    // Wait for 2000 ms (i.e. 2 seconds)
    cy.wait(2000)
    
    if (cy.contains('Happy Testing at LambdaTest'))
    {
      // If the new element is added, it would be a part of the DOM
      cy.log('Cypress LambdaTest ToDo App passed')
    }
    else
    {
      cy.log('Cypress LambdaTest ToDo App failed')
    }
  })
})