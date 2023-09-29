class RegisterPage {
    elements = {
      nameInput: () => cy.get('#input-name'),
      passwordInput: () => cy.get('#input-re-password'),
      errorNam: () => cy.contains(" Full name should contains from 4 to 50 characters "),
      cleareNameInput: () => cy.get('#input-name'),
      rePass: () => cy.get("#input-re-password"),
      clearRePass: () => cy.get("#input-re-password"),
      cBox: () => cy.get('span.custom-checkbox'),
      roginButton: () => cy.contains(" Register "),
    }

    regin() {
        this.elements.roginButton().click();
    }

    clearRePass() {
        this.elements.clearRePass().clear();
    }

    checkBox() {
        this.elements.cBox().first().click();
      }
    rePassWord() {
        this.elements.rePass().should('have.css', 'background-color', 'rgb(255,61,113)');
    }
    
    setName(name) {
        this.elements.nameInput().type(name);
    }

    setRePass(rePassword) {
        this.elements.passwordInput().type(rePassword);
    }
   
    errorName(value) {
        this.elements.errorNam().should('be.visible');
    }
    clearName() {
        this.elements.cleareNameInput().clear();
    }
  }
  export default RegisterPage;