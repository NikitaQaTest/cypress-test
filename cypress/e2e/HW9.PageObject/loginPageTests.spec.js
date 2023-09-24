/// <reference types="cypress" />
import { FormsPage } from "./FormsPage";

describe("HW9_p1", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.contains("Auth").click();
        cy.contains("Login").click();
    })

    it("valEmail", () => {
        //валидация email 
        const forms = new FormsPage();
        forms.enterEmailValue("почтаДляТеста");
        cy.contains("Remember me").click();
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("mailForTest");
        cy.contains("Remember me").click();
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("123");
        cy.contains("Remember me").click();
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

    });
    it("valPassword", () => {
        //валидация пароль 
        const forms = new FormsPage();
        forms.enterPasswordValue("123");
        cy.contains("Remember me").click();
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        forms.enterPasswordValue("12");
        cy.contains("Remember me").click();
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        forms.enterPasswordValue("abs");
        cy.contains("Remember me").click();
        cy.contains(" Password should contain from 4 to 50 characters ").should("be.visible");
        cy.get("#input-password").clear();

        
    });
    it("login", () => {
        //успешный логин 
        const forms = new FormsPage();
        forms.enterEmailValue("testmail@mail.com");
        forms.enterPasswordValue("StrongPass1234");
        cy.contains(" Log In ").click();
        cy.contains("Nick Jones", { timeout: 7000 }).should("be.visible");

    });
    

    it("forgotPassword", () => {
        //страница "забыли пароль"  
        cy.contains("Forgot Password?").click();
        const forms = new FormsPage();
        forms.enterEmailValue("почтаДляТеста");
        cy.get('body').click();   //клик вне элементов
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();


        forms.enterEmailValue("123");
        cy.get('body').click();   //клик вне элементов
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("mailForTest");
        cy.get('body').click();   //клик вне элементов
        cy.contains(" Email should be the real one! ").should("be.visible");
        cy.get("#input-email").clear();

        forms.enterEmailValue("testmail@mail.com");  
        cy.contains(" Request password ").click();   //сброс пароля
        cy.contains("Nick Jones", { timeout: 7000 }).should("be.visible");
    });

    it("forgotPassword", () => {
        //страница "забыли пароль"  
        cy.contains("Forgot Password?").click();
        
    });
    
    it("checkRegisterButton", () => {
        //страница "регистрации"  
        cy.contains("Forgot Password?").click();
        cy.contains("Register").click();   
        cy.contains("Terms & Conditions", { timeout: 7000 }).should("be.visible");
    });

    it("checkBackToLogInButton", () => {
        //страница "регистрации"  
        cy.contains("Forgot Password?").click();
        cy.contains("Back to Log In").click();   
        cy.contains("Remember me", { timeout: 7000 }).should("be.visible");
    });

})