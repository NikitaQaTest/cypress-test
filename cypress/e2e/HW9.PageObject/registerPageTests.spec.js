/// <reference types="cypress" />
import { FormsPage } from "./FormsPage";

describe("HW9_p1", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.contains("Auth").click();
        cy.contains("Register").click();
    })
    

    it("chackName", () => {
        //валидация имя
        const forms = new FormsPage();
        forms.enterNameValue("123");
        cy.get('body').click(); 
        cy.contains(" Full name should contains from 4 to 50 characters ").should("be.visible");
        cy.get("#input-name").clear();

        forms.enterNameValue("12");
        cy.get('body').click(); 
        cy.contains(" Full name should contains from 4 to 50 characters ").should("be.visible");
        cy.get("#input-name").clear();

        forms.enterNameValue("abs");
        cy.get('body').click(); 
        cy.contains(" Full name should contains from 4 to 50 characters ").should("be.visible");
        cy.get("#input-name").clear();
    });

    it("valEmail", () => {
        //валидация email 
        const forms = new FormsPage();
        forms.enterEmailValue("почтаДляТеста");
        cy.get('body').click(); 
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("mailForTest");
        cy.get('body').click(); 
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("123");
        cy.get('body').click(); 
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();
    });

    it("valPassword", () => {
        //валидация пароль 
        const forms = new FormsPage();

        forms.enterPasswordValue("123");
        cy.contains('Terms & Conditions').click(); 
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        forms.enterPasswordValue("1");
        cy.contains('Terms & Conditions').click(); 
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        forms.enterPasswordValue("abs");
        cy.contains('Terms & Conditions').click(); 
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        
    });

    

    it("valRePassword", () => {
        //валидация повторно пароль пароль 
        const forms = new FormsPage();

        forms.enterRePasswordValue("123");
        cy.get("#input-re-password").should('have.css', 'background-color', 'rgb(247, 249, 252)');
        cy.get("#input-re-password").clear();

        forms.enterPasswordValue("absd1234");
        forms.enterRePasswordValue("absd1234");
        cy.get("#input-re-password").should('have.css', 'background-color', 'rgb(247, 249, 252)');
        cy.get("#input-password").clear();
        cy.get("#input-re-password").clear();


        forms.enterPasswordValue("abs");
        forms.enterRePasswordValue("abs");
        // Получите значение из поля "Password"
        cy.get('#input-password').invoke('val').then(passwordValue => {
         // Получите значение из поля "Repeat password"
         cy.get('#input-re-password').invoke('val').then(repeatPasswordValue => {
        // Сравните значения
               expect(passwordValue).to.equal(repeatPasswordValue);              
             });
         });         
    });
    
    it("register", () => {
         
        const forms = new FormsPage();
        
        forms.enterNameValue("nameUser");
        forms.enterEmailValue("emailUser@gmail.com");
        forms.enterPasswordValue("12345");
        forms.enterRePasswordValue("12345");

        cy.get('span.custom-checkbox').click();
        cy.contains(" Register ").click(); 
        cy.contains("Nick Jones", { timeout: 7000 }).should("be.visible");
    }); 
})