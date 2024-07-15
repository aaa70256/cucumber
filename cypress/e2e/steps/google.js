import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("open my application", () => {
  cy.visit('https://demo.guru99.com/test/newtours/');
});

//feature
// When("provide valid {string} and {string}", (userName, password) => {
//   cy.get("input[name='userName']")
//     .type(userName);
//   cy.get("input[name='password']")
//     .type(password);
// });

When("Login infomation is {string} and {string}", (userName, password) => {
  cy.get("input[name='userName']")
    .type(userName);
  cy.get("input[name='password']")
    .type(password);
});

Then("click on submit button", () => {
  cy.get("input[name='submit']").click()
});

Then("verify title should be {string}", (loginTitle) => {
  cy.get('tbody tr td h3').should("have.text", loginTitle)
});
