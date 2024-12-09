class DashboardPage{
    get dashboardTitle() {return cy.get('.title.mb22')};
    get dashboardCountriesAndCitiesButton() {return cy.get('div.NavbarItem_item__DLG8p.false>p.NavbarItem_item__label__FfqJ1.false').eq(2)};
    get dashboardCountryTitle() {return cy.get('[class="title"]')};
} 

export default new DashboardPage();