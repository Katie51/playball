class DashboardPage{
    get dashboardTitle() {return cy.get('.title.mb22')};
    get goButton() {return cy.get('div.dashboard_link__XMXOh').find('p.dashboard_link__label__VhJ37').eq(1).click()};
}
export default new DashboardPage();