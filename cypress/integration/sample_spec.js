describe('My First Test', function() {
  it('Expecting true to be true', function() {
    expect(true).to.equal(true);
  });
});

//What are describe, it, and expect?
//All of these functions come from Bundled Tools that Cypress bakes in.

// describe and it come from Mocha
// expect comes from Chai
// https://docs.cypress.io/guides/references/bundled-tools.html#Mocha

describe('Visiting website', function() {
  it('Visits safespacemu and clicks report button', function() {
    // VISIT WEBSITE
    // Set up the application state.
    cy.visit('https://safespacemu.netlify.com/');

    // GET BUTTON AND CLICK
    // Take an action
    cy.get('.mdc-button__label')
      .contains(/report to safespace/i)
      .click();
    // Get the DOM element containing the text.
    // DOM elements can contain more than the desired text and still match.
    // Additionally, Cypress prefers some DOM elements over the deepest element found.

    // ASSERT
    // Make an assertion about the resulting application state
    cy.url().should('include', '/report/0');
    // .contains(content)
    // .contains(content, options)
    // .contains(selector, content)
    // .contains(selector, content, options)
  });

  it('Clicks on different form elements and navigates through the form', function() {
    cy.get(
      'input[name="What form of sexual harrassment did you experience?"][value="Sexual comments or jokes"]'
    ).click();

    // go to next page
    cy.contains(/next/i).click();
    cy.url().should('include', '/report/1');
  });
});
