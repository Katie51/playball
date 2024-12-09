class DashboardPage{
    get dashboardTitle() {return cy.get('.title.mb22')};
    get goButton() {return cy.get('div.dashboard_link__XMXOh').find('p.dashboard_link__label__VhJ37').eq(1).click()};
    get dashboardCountriesAndCitiesButton() {return cy.get('div.NavbarItem_item__DLG8p.false>p.NavbarItem_item__label__FfqJ1.false').eq(2)};
    get dashboardCountryTitle() {return cy.get('[class="title"]')};
} 

export default new DashboardPage();