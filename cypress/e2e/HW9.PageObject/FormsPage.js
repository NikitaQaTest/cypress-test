export class FormsPage{
//элементы страницы 
    elements = {
        emailInput: () => cy.get("#input-email"),
        passwordInput: () => cy.get("#input-password"),
        nameInput: () => cy.get("#input-name"),
        rePasswordInput: () => cy.get("#input-re-password")
    }

//методы

    enterEmailValue(value) {
        this.elements.emailInput().type(value); 
    }

    enterPasswordValue(value) {
        this.elements.passwordInput().type(value);  
    }


    enterNameValue(value) {
        this.elements.nameInput().type(value);
    }

    enterRePasswordValue(value) {
        this.elements.rePasswordInput().type(value);
    }
}