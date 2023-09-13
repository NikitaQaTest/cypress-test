/// <reference types="cypress" />


/*contex("", () => {   группирует тесты
    ...
})*/


describe("First suite", () => {
    it("First test", () => {
        cy.visit("/")
    })
})

describe("Second suite", () => {
    //функционал который будет выполняться перед каждым тестом:
    beforeEach(() => {
        cy.visit("/");

    })
    //функционал который будет выполняться после каждого теста:
    afterEach(() => {
        //cy.visit


    })
    //перед после\одного теста
    before(() => {

    })

    after(() => {

    })
    it("First", () => {

    })

    it("Second", () => {

    })
})