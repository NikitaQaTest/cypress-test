import LoginPage from "./LoginPage.spec";
import MenuPage from "./menuPage.spec";

describe("First point HW9", () => {
    beforeEach(() => {
        cy.visit("/");
        const  menuPage = new  MenuPage();
// Перейти на страницу логин 
        menuPage.getAuthuthButton();
        menuPage.getLoginButton();
    })
    it("valEmailPassword", () => {
       
//валидация email 
        const loginPage = new LoginPage();
        loginPage.setEmail("dsakdjaslkdjlaksjd");
        cy.get('body').click();   //клик вне элементов
        loginPage.errorEmai();
        loginPage.clearEmail();

        loginPage.setEmail("abv");
        cy.get('body').click();   //клик вне элементов
        loginPage.errorEmai();
        loginPage.clearEmail();

//валидация пароль 
        loginPage.setPassword('123');
        cy.get('body').click();
        loginPage.errorPawor();
        loginPage.clearPassword();

        loginPage.setPassword('A2s');
        cy.get('body').click();
        loginPage.errorPawor();
        loginPage.clearPassword();
//валидация логин
        loginPage.setEmail("testlogin@gmail.com");
        loginPage.setPassword('A2sfffff');
        loginPage.chBox();
        loginPage.login();
        loginPage.logOk();
    })
    it("valForgotPass", () => {
        const  menuPage = new  MenuPage();
        menuPage.getForgottPassword();

        const loginPage = new LoginPage();
        loginPage.setEmail("dsakdjaslkdjlaksjd");
        cy.get('body').click();   
        loginPage.errorEmai();
        loginPage.clearEmail();

        loginPage.setEmail("abv");
        cy.get('body').click();   
        loginPage.errorEmai();
        loginPage.clearEmail();

//проверка перехода по кнопке "Register" и "Back to Log In"
        cy.contains("Register").click();
        loginPage.regOk;
        //cy.get("[transform='rotate(90 12 12)']").click();
        cy.window().then((win) => {
            win.history.back(); // Этот код выполнит переход на предыдущую страницу в браузерной истории
          });

        cy.contains("Back to Log In").click();
        loginPage.backToLog;

    })
})

