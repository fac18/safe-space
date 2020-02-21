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

describe('First section flow', function() {
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
    cy.url().should('include', '/report/section/0');
    // .contains(content)
    // .contains(content, options)
    // .contains(selector, content)
    // .contains(selector, content, options)
  });

  it('Clicks on form elements first page and navigates to second', function() {
    cy.contains(/ok/i).click();
    cy.url().should('include', '/report/0');
    cy.get(
      'input[name="What form of sexual harrassment did you experience?"]'
    ).check(['Sexual comments or jokes']); // add assertion

    // go to next page
    cy.contains(/next/i).click();
    cy.url().should('include', '/report/1');
  });

  it('Types date, clicks radio buttons on second page and navigates to third', function() {
    cy.get('input[type="date"]')
      .click()
      .type('2020-10-10')
      .should('have.value', '2020-10-10');

    cy.get(
      'input[type="radio"][value="There was a single incident in this period"]'
    ).click();

    cy.get(
      'input[type="radio"][value="There were a number of occurrences within this period"]'
    ).click();

    // go to next page
    cy.contains(/next/i).click();
    cy.url().should('include', '/report/2');
  });

  it('clicks several buttons on the third page and navigates to the last page of the section', function() {
    cy.get('input[type="radio"][value="In the UK"]').click();
    cy.get('input[type="radio"][value="Outside the UK"]').click();

    cy.get('input[type="checkbox"][value="Online"]').click();

    cy.get('input[type="text"][placeholder="Write the location here"]')
      .type('Hello my name is Alex')
      .should('have.value', 'Hello my name is Alex');

    // go to next page
    cy.contains(/next/i).click();
    cy.url().should('include', '/report/3');
  });

  it('writes experience in the last page of the section and navigates to divider', function() {
    cy.get('input[type="textarea"][placeholder="Write your experience here"]')
      .type('Hello my name is Alex')
      .should('have.value', 'Hello my name is Alex');

    // go to next page
    cy.contains(/next/i).click();
    cy.url().should('include', '/report/section/1');
  });
});
