class LoginPage {
    get emailInput() {return cy.get ('[name="email"]')};
    get passwordInput() {return cy.get ('[name="password"]')};
    get enterButton() {return cy.get ('[type="submit"]')};
    get entryText() {return cy.get ('.loginContainer__title.mb40')};
     
    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.enterButton.click();
    } 
    }  
    export default new LoginPage();