import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import countriesAndCitiesPage from "../../page_objects/countriesAndCities.page";
import polandPage from "../../page_objects/poland.page";
import addCityPolandPage from "../../page_objects/addCityPoland.page";

describe ('Login', () => {
    before(() => {
        cy.visit('/')
    })
    it ('Should log in as an Admin', () => {
        loginPage.login('point@gmail.com','12345678');
        dashboardPage.dashboardTitle.should('have.text', 'Dashboard')

        dashboardPage.dashboardCountriesAndCitiesButton.click();
        dashboardPage.dashboardCountryTitle.should('have.text','Countries ');


    
        countriesAndCitiesPage.countryPoland.contains('Poland').click();

        countriesAndCitiesPage.goToCountryButton.eq(0).click();
        cy.get('h1.title').should('have.text','Poland');

        polandPage.addCityButton.click();
        cy.get('h1.title').should('have.text','Add city (Poland)');

        cy.get('[type="text"]').type('Kluczbork');
        cy.get('.gm-style').click();
        cy.get('select').select('Europe/Berlin  (GMT +1) ') // Select the 'user-1' option
     
        // cy.get('#timezone').contains('Europe/Berlin  (GMT +1) ').click();
        // addCityPolandPage.setTimeZone.contains('Europe/Berlin  (GMT +1) ').click();

        // addCityPolandPage.addCityButton.click();
        cy.get('[type="submit"]').click();

    })
})


// cy.get('div.dashboard_link__XMXOh > p.dashboard_link__label__VhJ37').eq(1).click();
//cy.get('div.dashboard_link__XMXOh').find('p.dashboard_link__label__VhJ37').eq(1).click();