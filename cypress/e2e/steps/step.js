import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to the home page', () => {
  cy.visit('http://localhost:8080/')
})

Then('I see the home page', () => {
  cy.get("header[class='header'] h1").should('have.text', 'todos')
})

// When('I have the following todos:', (data) => {
//   data.hashes().forEach(item => {
//     cy.get('.new-todo').type(`${item.title}{enter}`)
//     if (item.completed === 'true') {
//       cy.get('.todo-list li').each($li => {
//         cy.wrap($li).find('.view label').invoke('text').then(text => {
//           if (text.trim() === item.title) {
//             cy.wrap($li).find('.toggle').click()
//           }
//         })
//       })
//     }
//   })
// })
// 上面那一段的優化寫法
When('I have the following todos:', (data) => {
  data.hashes().forEach(item => {
    cy.get('.new-todo').type(`${item.title}{enter}`)
    if (item.completed === 'true') {
      console.log(cy.get('.todo-list li'))
      cy.get('.todo-list li').filter(`:contains("${item.title}")`).find('.toggle').click()
    }
  })
})


Then('I see the following todo:', (data) => {
  data.hashes().forEach(item => {
    cy.get('.todo-list li').each($li => {
      cy.wrap($li).find('.view label').invoke('text').then(text => {
        if (text.trim() === item.title) {
          cy.wrap($li).should('contain', item.title)
        }
      })
    })
  })
})

Then('I see that I have {string}', (string) => {
  cy.get('.todo-count').should('have.text', string)
})