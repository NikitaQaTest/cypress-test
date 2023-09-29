import LoginPage from "./LoginPage.spec";
import MenuPage from "./menuPage.spec";
import RegisterPage from "./registerPage.spec"


describe("Second point HW9", () => {
    beforeEach(() => {
        cy.visit("/");
        const  menuPage = new  MenuPage();
// Перейти на страницу логин 
        menuPage.getAuthuthButton();
        menuPage.getRegisterButtin();
    })
    it("valFormFields", () => {

//валидация name
        const registerPage = new RegisterPage();
        
        
        registerPage.setName("ccv");
        cy.get('body').click();
        registerPage.errorName();
        registerPage.clearName();

        registerPage.setName("222");
        cy.get('body').click();
        registerPage.errorName();
        registerPage.clearName();

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

//валидаци re-password

        registerPage.setRePass("222");
        registerPage.rePassWord;
        registerPage.clearRePass();

        registerPage.setRePass("123453525");
        registerPage.rePassWord;
        registerPage.clearRePass();

        registerPage.setRePass("123456ASFSaxczxc");
        registerPage.rePassWord;
        registerPage.clearRePass();
//login


        registerPage.setName("Name");
        loginPage.setEmail("post@test.com");
        loginPage.setPassword('12345');
        registerPage.setRePass("12345");
        registerPage.checkBox();
        cy.contains(' Register ').click();
        loginPage.logOk();

    })
})