

class LoginPage {
    elements = {
      emailInput: () => cy.get('#input-email'),
      passwordInput: () => cy.get('#input-password'),
      loginButton: () => cy.contains(" Log In "),
      errorEmail: () => cy.contains(" Email should be the real one! "),
      errorPassword: () => cy.contains(" Password should contain from 4 to 50 characters "),
      checkBox: () => cy.get('[class="custom-checkbox"]'),
      clearEmai: () => cy.get('#input-email'),
      clearPass: () => cy.get('#input-password'),
      loginOk: () => cy.contains("Nick Jones", { timeout: 7000 }),
      checkReg: () => cy.contains("Terms & Conditions", { timeout: 7000 }),
      checkBackLog: () => cy.contains("Remember me", { timeout: 7000 }),
    }
    backToLog() {
        this.elements.checkBackLog().should("be.visible");
    }
    regOk() {
        this.elements.checkReg().should("be.visible");
    }
    logOk() {
        this.elements.loginOk().should("be.visible");
    }
    setEmail(email) {
        this.elements.emailInput().type(email);
    }
  
    setPassword(password) {
        this.elements.passwordInput().type(password);
    }
  
    login() {
        this.elements.loginButton().click();
    }
    
    errorEmai(velue) {
        this.elements.errorEmail().should('be.visible');
      }

    
    errorPawor(velue) {
        this.elements.errorPassword().should('be.visible');
    }

    chBox() {
        this.elements.checkBox().click();
      }

    clearEmail() {
        this.elements.clearEmai().clear();
    }

    clearPassword() {
        this.elements.clearPass().clear();
    }


  }
  export default LoginPage;