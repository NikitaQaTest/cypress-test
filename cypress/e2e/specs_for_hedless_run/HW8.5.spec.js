/// <reference types="cypress" />

describe("HW_8", () => {
    
    beforeEach(() => {
        cy.visit("/");
    })
   //проверка черной темы
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


    //проверка на видимость текста 
    it("visibleChack", () => {
        cy.get("[title='Layout']").click();
        cy.get("[title='Accordion']").click();
        cy.contains("A nebula is an interstellar cloud of dust, hydrogen").should('not.be.visible');
        cy.contains(" Product Details ").click();
        cy.contains("A nebula is an interstellar cloud of dust, hydrogen").should('be.visible');
    })

    //наведение мышки и всплывающее окно 
    it ("mouseenter", () => {
        cy.get("[title='Modal & Overlays']").click();
        cy.get("[title='Popover']").click();
        cy.get("[nbpopoverplacement='right']").trigger('mouseenter');
        cy.contains("Hello, how are you today?").should('be.visible');
    })

    //ввод и проверка текста 
    it ("typeName", () => {
        cy.get("[title='Modal & Overlays']").click();
        cy.get("[title='Dialog']").click();
        cy.contains("Enter Name"). click();
        cy.get("[placeholder='Name']").type("userName");
        cy.contains("Submit"). click();
        cy.get('.ng-star-inserted').should('contain', 'userName');


    })
})

