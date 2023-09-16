/// <reference types="cypress" />

describe("HW_8", () => {
    
    beforeEach(() => {
        cy.visit("/");
    })
    
    it("colorChackLight", () => {
        cy.get("[ng-reflect-klass='select-button']").click();
        cy.contains(" Light").click();
        cy.get("nav").should('have.css', 'background-color', 'rgb(255, 255, 255)');
        
        cy.get("[ng-reflect-klass='select-button']").click();
        cy.contains(" Dark").click();
        cy.get("nav").should('have.css', 'background-color', 'rgb(34, 43, 69)');
    
        cy.get("[ng-reflect-klass='select-button']").click();
        cy.contains(" Cosmic").click();
        cy.get("nav").should('have.css', 'background-color', 'rgb(50, 50, 89)');
        
        cy.get("[ng-reflect-klass='select-button']").click();
        cy.contains(" Corporate").click();
        cy.get("nav").should('have.css', 'background-color', 'rgb(255, 255, 255)');
        
    })
})

