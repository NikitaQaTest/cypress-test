


class MenuPage {
    elements = {
      authButton: () => cy.get("[title='Auth']"),
      loginButton: () => cy.contains("Login"),
      forgottButoon: () => cy.contains("Forgot Password?"),
      regButton: () => cy.contains("Register"),
      formsButton: () => cy.contains("Forms"),
      datepickerButton: () => cy.contains("Datepicker"),
    }
  
    getDatepicker() {
      this.elements.datepickerButton().click();
   }
    getForms() {
      this.elements.formsButton().click();
   }
    getAuthuthButton() {
       this.elements.authButton().click();
    }
  
    getLoginButton() {
      this.elements.loginButton().click();
    }

    getForgottPassword () {
       this.elements.forgottButoon().click();

    }

    getRegisterButtin () {
      this.elements.regButton().click();
    }
  }
  export default MenuPage;