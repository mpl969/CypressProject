/// <reference types="cypress" />


it('should navigate to the TodoMVC',()=>{
    cy.visit("http://todomvc-app-for-testing.surge.sh");
    cy.get('.new-todo').type("Clean Room {enter}");
    cy.get('label').should("have.text","Clean Room");
    cy.get('.toggle').should("not.be.checked");
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line','line-through')
    cy.contains("Clear").click()
    cy.get(".todo-list").should('not.have.descendants','li')
})