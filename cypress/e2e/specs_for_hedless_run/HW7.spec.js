/// <reference types="cypress" />
import xpath from "cypress-xpath";

describe("HW_7_P7-8", () => {
    
    beforeEach(() => {
        cy.visit("/");
    })
    // клик по xpath
    it("FirstXpath", () => {
        cy.xpath("/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/nb-sidebar/div/div/nb-menu/ul/li[2]/a/span").click();
    })
    
})



describe("HW_7_P7-8", () => {
    
    beforeEach(() => {
        cy.visit("/");
    })
    // клик css  по атрибуту []
    it("FirstCSS", () => {
        cy.get("[title='Layout']").click();
        cy.get("[title='Accordion']").click();
    })
    
    it("SecondCSS", () => {
        cy.get("[title='Forms']").click();
        cy.get("[title='Form Layouts']").click();

    })
    
})