
import MenuPage from "./menuPage.spec";
import moment from "moment";

describe("Third point HW9", () => {
    beforeEach(() => {
        cy.visit("/");
        const  menuPage = new  MenuPage();
// Перейти на страницу логин 
        menuPage.getForms();
        menuPage.getDatepicker();
    })
    it("date", () => {
        const formattedDate = moment().format('MMM D[,] YYYY');

        cy.get('input[placeholder="Form Picker"]').click();
        cy.get('.day-cell.today').click();
        cy.get('input[placeholder="Form Picker"]').should("have.value", formattedDate);


    })
})

