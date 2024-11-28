import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe ('Login', () => {
    before(() => {
        cy.visit('/')
    })
    it ('Should log in as an Admin', () => {
        loginPage.login('point@gmail.com','12345678');
        dashboardPage.dashboardTitle.should('have.text', 'Dashboard')
    })
})